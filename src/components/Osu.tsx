import { useRef, useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import failSvg from "../icons/x.svg";
import { failCount, gameResult, hitZoneStatus, successCount } from "../signals/HitZoneStatus";
import { Direction, Status } from "../types/types";
import Arrow from "./ui/Arrow";
import { animationState } from "../signals/Message";
import { RECT_COUNT, SPEED } from "../constants/constants";

type Rect = {
    direction: Direction;
    class: string;
    status: Status;
};

const getRandomDirection = () => {
    const directions: Direction[] = ["Up", "Down", "Left", "Right"];
    return directions[Math.floor(Math.random() * directions.length)];
};

export default function Osu() {
    const randomDirections = Array.from({ length: RECT_COUNT }, () => getRandomDirection());

    const rects = useSignal<Rect[]>(
        Array(RECT_COUNT)
            .fill(null)
            .map((_, index) => ({
                direction: randomDirections[index],
                class: "bg-cod_white",
                status: "Idle",
            }))
    );
    const exitCount = useSignal(0);
    const gameState = useSignal<"Idle" | "Moving">("Idle");

    const parentRef = useRef<HTMLDivElement | null>(null);
    const childRefs = useRef<(HTMLDivElement | null)[]>([]);
    const hitZoneRef = useRef<HTMLDivElement | null>(null);
    const positionX = useRef(0);
    const lastTime = useRef(performance.now());
    const currentlyInHitZone = useRef(new Set<number>());

    const getOpacityForRect = (index: number) => {
        const position = index - exitCount.value;
        if (position < 2) return 1;
        if (position < 4) return 0.7;
        if (position < 6) return 0.4;
        return 0.2;
    };

    useEffect(() => {
        if (animationState.value === "Complete") {
            startMovement();
        }
    }, [animationState.value]);

    useEffect(() => {
        if (gameResult.value === "Win" || gameResult.value === "Loose") {
            stopMovement();
        }
    }, [gameResult.value]);

    useEffect(() => {
        let animationFrameId: number;

        const moveLeft = (currentTime: number) => {
            const deltaTime = (currentTime - lastTime.current) / 1000;
            lastTime.current = currentTime;

            if (gameState.value === "Moving" && parentRef.current) {
                positionX.current -= SPEED * deltaTime;
                parentRef.current.style.transform = `translateX(${positionX.current}px)`;
            }

            if (hitZoneRef.current) {
                const hitZoneRect = hitZoneRef.current.getBoundingClientRect();
                childRefs.current.forEach((child, index) => {
                    if (child) {
                        const childRect = child.getBoundingClientRect();
                        const isColliding = !(
                            hitZoneRect.right < childRect.left ||
                            hitZoneRect.left > childRect.right ||
                            hitZoneRect.bottom < childRect.top ||
                            hitZoneRect.top > childRect.bottom
                        );

                        if (isColliding && !currentlyInHitZone.current.has(index)) {
                            currentlyInHitZone.current.add(index);
                            hitZoneStatus.value = "Idle";
                        } else if (!isColliding && currentlyInHitZone.current.has(index)) {
                            currentlyInHitZone.current.delete(index);
                            if (rects.value[index].status === "Idle") {
                                rects.value[index].class = "bg-orange_light";
                                hitZoneStatus.value = "Afk";
                                failCount.value += 1;
                            }

                            exitCount.value++;

                            if (exitCount.value >= RECT_COUNT) {
                                stopMovement();
                            }
                        }
                    }
                });
            }

            animationFrameId = requestAnimationFrame(moveLeft);
        };

        animationFrameId = requestAnimationFrame(moveLeft);

        return () => cancelAnimationFrame(animationFrameId);
    }, [exitCount.value]);

    const startMovement = () => {
        positionX.current = 0;
        if (parentRef.current) {
            parentRef.current.style.transform = `translateX(${positionX.current}px)`;
        }

        gameState.value = "Moving";
        lastTime.current = performance.now();
    };

    const stopMovement = () => {
        hitZoneStatus.value = "Idle";
        gameState.value = "Idle";
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const keyDirectionMap: Record<string, Direction> = {
                ArrowUp: "Up",
                z: "Up",
                ArrowLeft: "Left",
                q: "Left",
                ArrowDown: "Down",
                s: "Down",
                ArrowRight: "Right",
                d: "Right",
            };

            const pressedDirection = keyDirectionMap[event.key];

            if (pressedDirection && currentlyInHitZone.current.size > 0) {
                const firstIdleIndex = [...currentlyInHitZone.current].find(
                    (index) => rects.value[index].status === "Idle"
                );

                if (firstIdleIndex !== undefined) {
                    const rect = rects.value[firstIdleIndex];

                    if (rect.direction === pressedDirection) {
                        rect.class = "bg-green_light";
                        hitZoneStatus.value = "Success";
                        rect.status = "Success";
                        successCount.value += 1;
                    } else {
                        rect.class = "bg-orange_light";
                        hitZoneStatus.value = "Fail";
                        rect.status = "Fail";
                        failCount.value += 1;
                    }

                    rects.value = [...rects.value];
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div class="relative mx-auto flex w-full max-w-screen-custom flex-row items-center">
            <div ref={parentRef} class="ml-[265px] flex flex-row gap-[40px] overflow-visible">
                {rects.value.map((rect, index) => (
                    <div
                        key={index}
                        ref={(el) => (childRefs.current[index] = el)}
                        class={`flex size-[106px] items-center justify-center rounded-[10px] transition-opacity duration-300 ${rect.class}`}
                        style={{
                            opacity: getOpacityForRect(index),
                        }}>
                        <Arrow direction={rect.direction} color={rect.status || "Idle"} />
                        {rect.status === "Success" && (
                            <svg
                                class={`absolute top-0 h-[150px] w-[145px] translate-x-[-2px] translate-y-[-30px] animate-fade-out transition-opacity`}
                                viewBox="0 0 145 150"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32" cy="8" r="5" fill="#ECFFCE" />
                                <circle cx="123.5" cy="18.5" r="2.5" fill="#ECFFCE" />
                                <circle cx="121.5" cy="147.5" r="2.5" fill="#ECFFCE" />
                                <circle cx="129.5" cy="140.5" r="1.5" fill="#ECFFCE" />
                                <circle cx="17.5" cy="1.5" r="1.5" fill="#ECFFCE" />
                                <circle cx="140" cy="34" r="5" fill="#ECFFCE" />
                                <circle cx="8" cy="19" r="8" fill="#ECFFCE" />
                            </svg>
                        )}
                    </div>
                ))}
            </div>
            <div
                key="hitZone"
                ref={hitZoneRef}
                class="absolute left-[119px] top-0 size-[106px] rounded-[10px] shadow-illuminated">
                <div
                    class={`flex h-full w-full items-center justify-center rounded-[10px] shadow-custom-inner ${
                        hitZoneStatus.value === "Success"
                            ? "bg-green_light bg-opacity-30"
                            : "bg-beige bg-opacity-30"
                    }`}>
                    {hitZoneStatus.value === "Fail" && <img src={failSvg} alt="failSvg" class="size-[21px]" />}
                    {hitZoneStatus.value === "Afk" && <img src={failSvg} alt="failSvg" class="size-[21px]" />}
                    {hitZoneStatus.value != "Success" && (
                        <svg
                            class="absolute inset-0 h-full w-full stroke-beige"
                            style={{
                                stroke: {
                                    Idle: "#F3F3F1",
                                    Fail: "#FFBCAB",
                                    Afk: "#FFBCAB",
                                    Success: "#F3F3F1",
                                }[hitZoneStatus.value],
                            }}
                            viewBox="0 0 106 106"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect
                                x="105"
                                y="1"
                                width="104"
                                height="104"
                                rx="9"
                                transform="rotate(90 105 1)"
                                stroke="stroke-beige"
                                stroke-width="2"
                                stroke-dasharray="8 8"
                            />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    );
}
