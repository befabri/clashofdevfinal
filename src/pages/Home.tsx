import { LandingCard } from "../components/LandingCard";
import lightning from "../icons/lightning.svg";
import LinkButton from "../components/ui/LinkButton";
import CollaboratorCursor from "../components/ui/CollaboratorCursor";
import { message } from "../signals/Message";
import baliseShieldSvg from "../icons/balise_shield.svg";

export function Home() {
    message.value = "CLASH TIME!";

    return (
        <div class="relative h-full max-w-screen-2xl">
            <div class="flex min-h-screen max-w-screen-2xl flex-col items-center justify-between px-[207px] pt-[80px]">
                <div class="flex flex-grow flex-col items-center justify-center">
                    <LandingCard />
                </div>
                <section class="flex flex-col items-center pb-[40px]">
                    <LinkButton href="/play" className="relative z-20" size="lg">
                        Start the Game
                    </LinkButton>
                </section>
            </div>
            <img src={lightning} class="absolute right-[172px] top-[121px] size-[38px]" />
            <img src={baliseShieldSvg} class="absolute left-[175px] top-[190px] h-[80px] w-[103px]" />
            <div class="absolute bottom-[56px] right-[137px] rotate-[-15.79deg]">
                <CollaboratorCursor title="@maislina_" side="right" style="orange" isTextColored={false} />
            </div>
            <div class="absolute left-[54px] top-[824px] rotate-[-10.41deg]">
                <CollaboratorCursor title="@sometimecrea" side="right" style="pink" isTextColored={false} />
            </div>
            <div class="absolute right-[113px] top-[286px] rotate-[-6.64deg]">
                <CollaboratorCursor title="@LLCoolChris" side="left" style="blue" isTextColored={false} />
            </div>
        </div>
    );
}
