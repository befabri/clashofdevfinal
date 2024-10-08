import kingRedImage from "../assets/king-red.png?w=400&h=416&format=webp&hasAlpha=true&imagetools";
import crySvg from "../icons/cry.svg";
import clashOfDevSvg from "../icons/clash_of_dev.svg";
import design from "../assets/design.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import code from "../assets/code.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import { selectedCharacter } from "../signals/CharacterSelection";

export function WinnerCard() {
    return (
        <article class="relative flex flex-col gap-8 overflow-hidden rounded-[60px] bg-beige px-[86px] py-12 dark:bg-cod_black">
            <p class="text-[12px] font-semibold leading-5 text-cod_black text-opacity-80 dark:text-cod_white">
                / GRANDGAGNANT
            </p>
            <h1 class="pr-[86px] text-justify text-[115px] font-semibold leading-[123px] text-cod_black dark:text-cod_white">
                You are the winner!
            </h1>
            <p class="pb-2 text-base font-medium text-cod_black text-opacity-60">
                Oh wow ! <span class="font-semibold">Quel BOSS!</span>
            </p>
            <div class="flex flex-col gap-6 pr-[434px] text-base font-medium text-cod_black text-opacity-60">
                <p>Bravo tu as remis ton lead un peu trop confiant à sa place !</p>
                <p class="font-semibold">On rejoue ?</p>
            </div>
            <div class="absolute bottom-[-191px] right-[-146px]">
                <div class="relative h-auto w-full">
                    <img
                        src={kingRedImage}
                        alt="A sad king"
                        width={400}
                        height={416}
                        class="h-auto w-full rotate-[33.27deg] object-contain"
                    />
                    <img src={crySvg} class="absolute bottom-[232px] right-[165px] h-[62px] w-[58px]" />
                </div>
            </div>
            <div class="absolute bottom-[-15px] right-[121px]">
                {selectedCharacter.value === 2 && (
                    <img
                        src={design}
                        alt="A victorious design player"
                        width={400}
                        height={416}
                        class="h-auto w-full rotate-[-23.08deg] object-contain"
                    />
                )}
                {selectedCharacter.value === 3 && (
                    <img
                        src={code}
                        alt="A victorious code player"
                        width={400}
                        height={416}
                        class="h-auto w-full rotate-[-23.08deg] object-contain"
                    />
                )}
            </div>
            <img src={clashOfDevSvg} class="absolute right-[40px] top-[20px] h-[73px] w-[70px]" />
        </article>
    );
}
