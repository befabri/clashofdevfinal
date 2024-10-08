import kingImage from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import clashOfDevSvg from "../icons/clash_of_dev.svg";
import asteriskSvg from "../icons/asterisk.svg";
import arrowLeftSvg from "../icons/arrow_left.svg";
import arrowRightSvg from "../icons/arrow_right.svg";

export function LandingCard() {
    return (
        <article class="relative flex flex-col gap-8 overflow-hidden rounded-[60px] bg-beige px-[20px] py-8 dark:bg-cod_black md:px-[43px] lg:px-[86px] h-lg:h-[631px] h-lg:py-12">
            <p class="text-[12px] font-semibold leading-5 text-cod_black text-opacity-80 dark:text-cod_white">
                / RÈGLESDUJEU
            </p>
            <h1 class="text-justify text-[80px] font-semibold leading-[86px] text-cod_black dark:text-cod_white md:pr-[86px] md:text-[115px] md:leading-[123px]">
                <span class="xl:mr-[170px]">Règles</span> du Clash
            </h1>
            <p class="pb-2 text-base font-medium text-cod_black text-opacity-60 md:pr-[300px] lg:pr-0">
                Que serait Clash of Dev sans un <span class="font-bold">réel Clash</span> ? Une réelle bataille ?
            </p>
            <div class="flex flex-col gap-6 text-base font-medium text-cod_black text-opacity-60 md:pr-[300px] lg:pr-[434px]">
                <p>
                    Exécute la <span class="font-semibold">bonne combinaison des 10 touches à</span> temps pour
                    vaincre <span class="font-semibold">LE SUR-BOOSTED,</span> aka ton lead tech un peu chiant.
                </p>
                <p class="font-semibold">Montre nous tes skills !</p>
            </div>
            <div class="absolute bottom-0 right-[-40px] hidden md:flex lg:right-0">
                <img src={kingImage} alt="A king" width={416} height={401} class="h-auto w-full object-contain" />
            </div>
            <img
                src={clashOfDevSvg}
                class="absolute right-[20px] top-[10px] h-[73px] w-[70px] md:right-[40px] md:top-[20px]"
            />
            <img src={asteriskSvg} class="absolute left-[416px] top-[246px] hidden size-[30px] md:flex" />
            <div class="key:top-[173px] absolute left-[322px] top-[100px] hidden size-[68px] rotate-[-23.3deg] items-center justify-center rounded-[10px] bg-cod_white shadow-custom-inner sm:flex md:left-[482px] md:top-[100px] md:size-[85px] xl:size-[106px]">
                <img src={arrowRightSvg} class="size-[24px] md:size-[30px] xl:size-[38px]" />
            </div>
            <div class="key:top-[98px] absolute left-[347px] top-[60px] hidden size-[68px] rotate-[10.04deg] items-center justify-center rounded-[10px] bg-cod_white shadow-custom-inner sm:flex md:left-[547px] md:top-[60px] md:size-[85px] xl:size-[106px]">
                <img src={arrowRightSvg} class="size-[24px] md:size-[30px] xl:size-[38px]" />
            </div>
        </article>
    );
}
