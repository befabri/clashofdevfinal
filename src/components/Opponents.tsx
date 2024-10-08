import designImage from "../assets/design.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import designRedImage from "../assets/design-red.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import kingImage from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import kingRedImage from "../assets/king-red.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import codeImage from "../assets/code.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import codeRedImage from "../assets/code-red.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import { selectedCharacter } from "../signals/CharacterSelection";
import { Character } from "../types/types";
import { gameResult, hitZoneStatus } from "../signals/HitZoneStatus";
import SpriteAnimation from "./ui/SpriteAnimation";
import { useEffect, useRef } from "preact/hooks";

function getRandomValue(min: number, max: number): string {
    return `${Math.floor(Math.random() * (max - min)) + min}px`;
}

type Particle = {
    x: number;
    y: number;
    size: number;
    color: string;
    velocityX: number;
    velocityY: number;
    gravity: number;
};

export default function Opponents() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const characterImages: Partial<Record<Character, { normal: string; damaged: string }>> = {
        2: { normal: designImage, damaged: designRedImage },
        3: { normal: codeImage, damaged: codeRedImage },
    };

    const characterImage = characterImages[selectedCharacter.value] || null;

    const renderDamageIndicator = (
        xMin: number,
        xMax: number,
        yMin: number,
        yMax: number,
        positionClass: string
    ) => (
        <span
            key={Math.random()}
            class={`absolute ${positionClass} rotate-[-19.74deg] animate-move-random text-[19px] font-extrabold leading-[54px] text-orange_mid`}
            style={{
                "--random-x": getRandomValue(xMin, xMax),
                "--random-y": getRandomValue(yMin, yMax),
            }}>
            -1
        </span>
    );

    useEffect(() => {
        if (canvasRef.current && (gameResult.value === "Win" || gameResult.value === "Loose")) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");
            const image = new Image();
            if (gameResult.value === "Loose" && characterImage) {
                image.src = characterImage.normal;
            } else if (gameResult.value === "Win") {
                image.src = kingImage;
            } else {
                return;
            }

            image.onload = () => {
                const pixelSize = 8;
                canvas.width = image.width;
                canvas.height = image.height;
                if (!ctx) return;
                ctx.imageSmoothingEnabled = false;

                const tempCanvas = document.createElement("canvas");
                const tempCtx = tempCanvas.getContext("2d");
                tempCanvas.width = Math.floor(image.width / pixelSize);
                tempCanvas.height = Math.floor(image.height / pixelSize);
                if (!tempCtx) return;
                tempCtx.imageSmoothingEnabled = false;

                tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height);

                const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height).data;
                const particleArray: Particle[] = [];

                for (let y = 0; y < tempCanvas.height; y++) {
                    for (let x = 0; x < tempCanvas.width; x++) {
                        const index = (y * tempCanvas.width + x) * 4;
                        const alpha = imageData[index + 3];
                        if (alpha > 0) {
                            particleArray.push({
                                x: x * pixelSize,
                                y: y * pixelSize,
                                size: pixelSize,
                                color: `rgba(${imageData[index]}, ${imageData[index + 1]}, ${imageData[index + 2]}, ${alpha / 255})`,
                                velocityX: (Math.random() - 0.5) * 6,
                                velocityY: (Math.random() - 0.5) * 6,
                                gravity: 0.3,
                            });
                        }
                    }
                }
                requestAnimationFrame(() => animateExplosion(particleArray, ctx, canvas.width, canvas.height));
            };
        }
    }, [gameResult.value]);

    const animateExplosion = (
        particleArray: Particle[],
        ctx: CanvasRenderingContext2D,
        canvasWidth: number,
        canvasHeight: number
    ) => {
        const animate = () => {
            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            for (let i = particleArray.length - 1; i >= 0; i--) {
                const particle = particleArray[i];
                particle.x += particle.velocityX;
                particle.y += particle.velocityY;
                particle.velocityY += particle.gravity;
                particle.size *= 0.98;

                if (particle.x < 0 || particle.x > canvasWidth || particle.y > canvasHeight || particle.size < 1) {
                    particleArray.splice(i, 1);
                } else {
                    ctx.fillStyle = particle.color;
                    ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
                }
            }

            if (particleArray.length > 0) {
                requestAnimationFrame(animate);
            }
        };

        animate();
    };

    return (
        <div class="flex h-full w-full flex-row items-end justify-between px-[32px]">
            {characterImage && (
                <div class="relative h-[400px] w-[416px]">
                    {gameResult.value === "Loose" && (
                        <canvas ref={canvasRef} class={`h-auto object-contain`}></canvas>
                    )}
                    {gameResult.value != "Loose" && (
                        <img
                            src={characterImage.normal}
                            alt={`Character ${selectedCharacter.value}`}
                            width={416}
                            height={400}
                            class={`h-auto object-contain ${hitZoneStatus.value === "Success" || hitZoneStatus.value === "Idle" ? "block" : "hidden"}`}
                        />
                    )}
                    {(hitZoneStatus.value === "Fail" || hitZoneStatus.value === "Afk") && (
                        <>
                            <SpriteAnimation
                                imageOne={{
                                    src: characterImage.normal,
                                    alt: `Character ${selectedCharacter.value}`,
                                }}
                                imageTwo={{
                                    src: characterImage.damaged,
                                    alt: `Character ${selectedCharacter.value} taking damage`,
                                }}
                                hitZoneStatus={hitZoneStatus.value}
                            />
                            {renderDamageIndicator(30, 100, 30, 100, "right-[9px] top-[2px]")}
                        </>
                    )}
                </div>
            )}
            <div class="relative h-[400px] w-[416px]">
                {gameResult.value === "Win" && <canvas ref={canvasRef} class={`h-auto object-contain`}></canvas>}
                {gameResult.value != "Win" && (
                    <img
                        src={kingImage}
                        alt="A king"
                        width={416}
                        height={400}
                        class={`h-auto object-contain ${hitZoneStatus.value === "Fail" || hitZoneStatus.value === "Idle" || hitZoneStatus.value === "Afk" ? "block" : "hidden"}`}
                    />
                )}

                {hitZoneStatus.value === "Success" && (
                    <>
                        <SpriteAnimation
                            imageOne={{ src: kingImage, alt: "A king" }}
                            imageTwo={{ src: kingRedImage, alt: "A king that takes damage" }}
                            hitZoneStatus={hitZoneStatus.value}
                        />
                        {renderDamageIndicator(50, 100, 50, 100, "left-[76px] top-[38px]")}
                    </>
                )}
            </div>
        </div>
    );
}
