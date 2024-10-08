import { useEffect, useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { animationDisplay, animationState, message } from "../signals/Message";

export default function Message() {
    const messageRef = useRef<HTMLSpanElement>(null);
    const animatedRef = useRef<HTMLDivElement>(null);
    const countdownNumber = useSignal(3);
    const animationKey = useSignal(0);

    async function startCountdown() {
        animationDisplay.value = false;
        await new Promise((resolve) => requestAnimationFrame(resolve));

        for (let i = 3; i > 0; i--) {
            countdownNumber.value = i;
            message.value = i.toString();
            animationKey.value += 1;
            animationDisplay.value = true;
            await new Promise((resolve) => setTimeout(resolve, 1500));
            animationDisplay.value = false;
            await new Promise((resolve) => setTimeout(resolve, 100));
        }
        animationState.value = "Fight";
    }

    function handleVsAppearedAnimationEnd() {
        animationDisplay.value = false;
        animationState.value = "Countdown";
    }

    function handleFightAnimationEnd() {
        animationDisplay.value = false;
        animationState.value = "Complete";
    }

    useEffect(() => {
        const unsubscribe = animationState.subscribe((newValue) => {
            if (newValue === "VsAppeared") {
                animationDisplay.value = false;
            } else if (newValue === "Countdown") {
                startCountdown();
            } else if (newValue === "Fight") {
                message.value = "Fight !";
                animationDisplay.value = true;
            }
        });
        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (animationDisplay.value && animationState.value === "Countdown") {
            requestAnimationFrame(() => {
                if (messageRef.current && animatedRef.current) {
                    const rect = messageRef.current.getBoundingClientRect();
                    const distanceFromMiddleToTop = -(window.innerHeight - rect.top - 40) / 2;
                    animatedRef.current.style.setProperty("--target-y", `${distanceFromMiddleToTop}px`);
                }
            });
        }
    }, [animationDisplay.value]);

    return (
        <>
            {animationDisplay.value && animationState.value === "Countdown" && (
                <div
                    key={animationKey.value}
                    ref={animatedRef}
                    class={`pointer-events-none fixed inset-0 z-50 flex animate-moveAndShrink items-center justify-center`}>
                    <span class="text-6xl font-bold text-beige">{message.value}</span>
                </div>
            )}

            {animationDisplay.value && animationState.value === "Fight" && (
                <div
                    ref={animatedRef}
                    onAnimationEnd={handleFightAnimationEnd}
                    class={`pointer-events-none fixed inset-0 z-50 flex animate-fight items-center justify-center`}>
                    <span class="text-6xl font-bold text-beige">{message.value}</span>
                </div>
            )}

            {!animationDisplay.value && animationState.value === "VsAppeared" && (
                <div
                    ref={animatedRef}
                    onAnimationEnd={handleVsAppearedAnimationEnd}
                    class={`pointer-events-none fixed inset-0 z-50 flex rotate-[-35deg] items-center justify-center`}>
                    <div class="absolute animate-text-move-left whitespace-nowrap text-8xl font-bold text-cod_white opacity-0 [text-shadow:_0_2px_4px_rgb(38_38_37_/_0.8)]">
                        Design
                    </div>
                    <div class="absolute animate-vs-appear whitespace-nowrap text-7xl font-bold text-cod_white opacity-0 [text-shadow:_0_2px_4px_rgb(38_38_37_/_0.8)]">
                        VS
                    </div>
                    <div class="absolute animate-text-move-right whitespace-nowrap text-8xl font-bold text-cod_white opacity-0 [text-shadow:_0_2px_4px_rgb(38_38_37_/_0.8)]">
                        Lead Tech
                    </div>
                </div>
            )}
            <span ref={messageRef} class="text-[12px] font-bold leading-5 text-beige">
                {!animationDisplay.value && message.value}
            </span>
        </>
    );
}
