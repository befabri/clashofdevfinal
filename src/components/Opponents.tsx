import designImage from "../assets/design.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import designRedImage from "../assets/design-red.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import kingImage from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import kingRedImage from "../assets/king-red.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import codeImage from "../assets/code.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import codeRedImage from "../assets/code-red.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import { selectedCharacter } from "../signals/CharacterSelection";
import { Character } from "../types/types";
import { hitZoneStatus } from "../signals/HitZoneStatus";
import SpriteAnimation from "./ui/SpriteAnimation";

function getRandomValue(min: number, max: number): string {
    return `${Math.floor(Math.random() * (max - min)) + min}px`;
}

export default function Opponents() {
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

    return (
        <div class="flex h-full w-full flex-row items-end justify-between px-[32px]">
            {characterImage && (
                <div class="relative h-[400px] w-[416px]">
                    <img
                        src={characterImage.normal}
                        alt={`Character ${selectedCharacter.value}`}
                        width={416}
                        height={400}
                        class={`h-auto object-contain ${hitZoneStatus.value === "Success" || hitZoneStatus.value === "Idle" ? "block" : "hidden"}`}
                    />
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
                <img
                    src={kingImage}
                    alt="A king"
                    width={416}
                    height={400}
                    class={`h-auto object-contain ${hitZoneStatus.value === "Fail" || hitZoneStatus.value === "Idle" || hitZoneStatus.value === "Afk" ? "block" : "hidden"}`}
                />
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
