import { LandingCard } from "../components/LandingCard";
import lightning from "../icons/lightning.svg";
import LinkButton from "../components/ui/LinkButton";
import CollaboratorCursor from "../components/ui/CollaboratorCursor";
import { animationState, message } from "../signals/Message";
import baliseShieldSvg from "../icons/balise_shield.svg";

export function Home() {
    message.value = "CLASH TIME!";
    animationState.value = "Cancel";

    return (
        <div class="relative h-full max-w-screen-2xl">
            <div class="flex min-h-screen max-w-screen-2xl flex-col items-center justify-between px-[60px] pt-[80px] md:px-[80px] lg:px-[140px] xl:px-[207px] xl:pt-[80px]">
                <div class="flex flex-grow flex-col items-center justify-center">
                    <LandingCard />
                </div>
                <section class="flex flex-col items-center pb-[40px]">
                    <LinkButton href="/play" className="relative z-20" size="lg">
                        Start the Game
                    </LinkButton>
                </section>
            </div>
            <img
                src={lightning}
                class="absolute right-[112px] top-[80px] size-[38px] md:right-[172px] md:top-[121px]"
            />
            <img
                src={baliseShieldSvg}
                class="absolute left-[50px] top-[90px] h-[64px] w-[82px] md:left-[175px] md:top-[190px] md:h-[80px] md:w-[103px]"
            />
            <div class="absolute bottom-[136px] right-[137px] rotate-[-15.79deg] md:bottom-[56px] md:right-[137px]">
                <CollaboratorCursor title="@maislina_" side="right" style="orange" isTextColored={false} />
            </div>
            <div class="absolute left-[54px] top-[824px] hidden rotate-[-10.41deg] md:flex">
                <CollaboratorCursor title="@sometimecrea" side="right" style="pink" isTextColored={false} />
            </div>
            <div class="absolute right-[113px] top-[286px] hidden rotate-[-6.64deg] md:flex">
                <CollaboratorCursor title="@LLCoolChris" side="left" style="blue" isTextColored={false} />
            </div>
        </div>
    );
}
