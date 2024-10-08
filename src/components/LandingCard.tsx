import kingImage from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import clashOfDevSvg from "../icons/clash_of_dev.svg";
import asteriskSvg from "../icons/asterisk.svg";
import arrowLeftSvg from "../icons/arrow_left.svg";
import arrowRightSvg from "../icons/arrow_right.svg";

export function LandingCard() {
    return (
        <article class="relative flex flex-col gap-8 overflow-hidden rounded-[60px] bg-beige px-[86px] py-12 dark:bg-cod_black">
            <p class="text-[12px] font-semibold leading-5 text-cod_black text-opacity-80 dark:text-cod_white">
                / RÈGLESDUJEU
            </p>
            <h1 class="pr-[86px] text-justify text-[115px] font-semibold leading-[123px] text-cod_black dark:text-cod_white">
                Règles du Clash
            </h1>
            <p class="pb-2 text-base font-medium text-cod_black text-opacity-60">
                Que serait Clash of Dev sans un <span class="font-bold">réel Clash</span> ? Une réelle bataille ?
            </p>
            <div class="flex flex-col gap-6 pr-[434px] text-base font-medium text-cod_black text-opacity-60">
                <p>
                    Exécute la <span class="font-semibold">bonne combinaison des 10 touches à</span> temps pour
                    vaincre <span class="font-semibold">LE SUR-BOOSTED,</span> aka ton lead tech un peu chiant.
                </p>
                <p class="font-semibold">Montre nous tes skills !</p>
            </div>
            <div class="absolute bottom-0 right-0">
                <img src={kingImage} alt="A king" width={416} height={401} class="h-auto w-full object-contain" />
            </div>
            <img src={clashOfDevSvg} class="absolute right-[40px] top-[20px] h-[73px] w-[70px]" />
            <img src={asteriskSvg} class="absolute left-[416px] top-[246px] size-[30px]" />
            <div class="absolute left-[482px] top-[173px] flex size-[106px] rotate-[-23.3deg] items-center justify-center rounded-[10px] bg-cod_white shadow-custom-inner">
                <img src={arrowLeftSvg} class="h-[38px] w-[38px]" />
            </div>
            <div class="absolute left-[547px] top-[98px] flex size-[106px] rotate-[10.04deg] items-center justify-center rounded-[10px] bg-cod_white shadow-custom-inner">
                <img src={arrowRightSvg} class="h-[38px] w-[38px]" />
            </div>
        </article>
    );
}
