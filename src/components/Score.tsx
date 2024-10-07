import swordImage from "../assets/sword.png?w=80&h=80&format=webp&imagetools";
import { clsx } from "clsx";
import { failCount, successCount } from "../signals/HitZoneStatus";

export default function Score() {
    return (
        <div class="flex flex-row items-center gap-[44.7px]">
            <div class="flex flex-row gap-[44.7px]">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        class={clsx(
                            `size-[50px] rounded-full`,
                            index < successCount.value ? "bg-green_light shadow-illuminated" : "bg-gray"
                        )}></div>
                ))}
            </div>

            <img src={swordImage} alt="A sword" width={80} height={80} class="h-auto w-full object-contain" />

            <div class="flex flex-row items-center gap-[44.7px]">
                {[...Array(5)].map((_, index) => (
                    <div
                        key={index}
                        class={clsx(
                            `size-[50px] rounded-full`,
                            index < failCount.value ? "bg-orange_mid shadow-illuminated" : "bg-gray"
                        )}></div>
                ))}
            </div>
        </div>
    );
}
