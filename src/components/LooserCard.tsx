import kingImage from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import designRedImage from "../assets/design-red-loose.png?w=400&h=416&format=webp&hasAlpha=true&imagetools";
import codeRedImage from "../assets/code-red-loose.png?w=400&h=416&format=webp&hasAlpha=true&imagetools";
import crySvg from "../icons/cry.svg";
import clashOfDevSvg from "../icons/clash_of_dev.svg";
import { selectedCharacter } from "../signals/CharacterSelection";

export function LooserCard() {
    return (
        <article class="relative flex h-[631px] flex-col gap-8 overflow-hidden rounded-[60px] bg-beige px-[86px] py-12 dark:bg-cod_black">
            <p class="text-[12px] font-semibold leading-5 text-cod_black text-opacity-80 dark:text-cod_white">
                / GRANDGAGNANT
            </p>
            <h1 class="pr-[86px] text-justify text-[115px] font-semibold leading-[123px] text-cod_black dark:text-cod_white">
                You are the loser!
            </h1>
            <p class="pb-2 text-base font-medium text-cod_black text-opacity-60">( La honte )</p>
            <div class="flex flex-col gap-6 pr-[434px] text-base font-medium text-cod_black text-opacity-60">
                <p>
                    Tu ne peux pas rester sur une défaite, tu te dois de te défendre contre ce système pyramidal de
                    merde
                </p>
                <p class="font-semibold">On rejoue ?</p>
            </div>
            <div class="absolute bottom-[-191px] right-[-146px]">
                <div class="relative h-auto w-full">
                    {selectedCharacter.value === 2 && (
                        <>
                            <img
                                src={designRedImage}
                                alt="A sad design player"
                                width={400}
                                height={416}
                                class="h-auto w-full rotate-[33.27deg] object-contain"
                            />
                            <img src={crySvg} class="absolute bottom-[232px] right-[166px] h-[62px] w-[58px]" />
                        </>
                    )}
                    {selectedCharacter.value === 3 && (
                        <>
                            <img
                                src={codeRedImage}
                                alt="A sad code player"
                                width={400}
                                height={416}
                                class="h-auto w-full rotate-[33.27deg] object-contain"
                            />
                            <img src={crySvg} class="absolute bottom-[269px] right-[167px] h-[62px] w-[33px]" />
                        </>
                    )}
                </div>
            </div>
            <div class="absolute bottom-0 right-[140px]">
                <img
                    src={kingImage}
                    alt="A victorious king"
                    width={400}
                    height={416}
                    class="h-auto w-full object-contain"
                />
            </div>
            <img src={clashOfDevSvg} class="absolute right-[40px] top-[20px] h-[73px] w-[70px]" />
        </article>
    );
}
