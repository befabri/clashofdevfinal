import clashOfDevSvg from "../icons/clash_of_dev.svg";
import lightningSvg from "../icons/lightning.svg";
import LinkButton from "./ui/LinkButton";
import CollaboratorCursor from "./ui/CollaboratorCursor";

export function Mobile() {
    return (
        <div class="relative flex h-screen w-full items-center justify-center px-[12px] py-[122px]">
            <article class="relative flex flex-col justify-center gap-[97px] overflow-hidden rounded-[60px] bg-beige px-[46px] py-10">
                <p class="x text-[12px] font-semibold leading-5 text-cod_black text-opacity-80">/ FINALE02</p>
                <h1 class="pl-[2px] pt-[5px] text-justify text-[40px] font-semibold leading-[48px] text-cod_black">
                    Oops ! Le gameplay est réservé aux joueurs PC (ehoui)...
                </h1>
                <div class="flex w-full justify-center">
                    <LinkButton href="/" style="black" className="relative z-20" size="lg">
                        Go back!
                    </LinkButton>
                </div>
                <img src={clashOfDevSvg} class="absolute right-[11px] top-[28px] h-[73px] w-[70px]" />
            </article>
            <img src={lightningSvg} class="absolute bottom-[52px] right-[58px] size-[38px]" />
            <div class="absolute bottom-[44Px] left-[39px] rotate-[-15.79deg]">
                <CollaboratorCursor title="@maislina_" side="right" style="orange" isTextColored={false} />
            </div>
        </div>
    );
}
