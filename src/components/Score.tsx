import swordImage from "../assets/sword.png?w=80&h=80&format=webp&imagetools";
import { MAX_SCORE } from "../constants/constants";
import { failCount, successCount } from "../signals/HitZoneStatus";
import ScoreCircle from "./ui/ScoreCircle";

export default function Score() {
    const successOverflow = Math.max(0, successCount.value - MAX_SCORE);
    const failOverflow = Math.max(0, failCount.value - MAX_SCORE);

    return (
        <div class="flex flex-row items-center gap-[44.7px]">
            <div class="flex flex-row gap-[44.7px]">
                {[...Array(MAX_SCORE)].map((_, index) => (
                    <ScoreCircle
                        key={index}
                        isFilled={
                            index < successCount.value || (failOverflow > 0 && index >= MAX_SCORE - failOverflow)
                        }
                        filledClass={
                            index < successCount.value
                                ? "bg-green_light shadow-illuminated"
                                : "bg-orange_mid shadow-illuminated"
                        }
                        emptyClass="bg-gray"
                    />
                ))}
            </div>

            <img src={swordImage} alt="A sword" width={80} height={80} class="h-auto w-full object-contain" />

            <div class="flex flex-row items-center gap-[44.7px]">
                {[...Array(MAX_SCORE)].map((_, index) => (
                    <ScoreCircle
                        key={index}
                        isFilled={
                            index >= MAX_SCORE - failCount.value ||
                            (successOverflow > 0 && index < successOverflow)
                        }
                        filledClass={
                            index >= MAX_SCORE - failCount.value
                                ? "bg-orange_mid shadow-illuminated"
                                : "bg-green_light shadow-illuminated"
                        }
                        emptyClass="bg-gray"
                    />
                ))}
            </div>
        </div>
    );
}
