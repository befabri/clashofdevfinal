import CollaboratorCursor from "../components/ui/CollaboratorCursor";
import { Scene } from "../types/types";
import lightningSvg from "../icons/lightning.svg";
import { message } from "../signals/Message";
import Button from "../components/ui/Button";
import { LooserCard } from "../components/LooserCard";
import baliseShieldSvg from "../icons/balise_shield.svg";

interface Props {
    onSceneComplete: (nextScene: Scene) => void;
}

export default function Loose({ onSceneComplete }: Props) {
    message.value = "Loser";

    const submit = () => {
        onSceneComplete("CharacterSelection");
    };

    return (
        <div class="relative h-full max-w-screen-2xl">
            <div class="flex min-h-screen flex-col items-center justify-between px-[207px] pt-[80px]">
                <div class="flex flex-grow flex-col items-center justify-center">
                    <LooserCard />
                </div>
                <section class="flex flex-col items-center pb-[40px]">
                    <Button onClick={submit} size="lg">
                        Rejouer ?
                    </Button>
                </section>
            </div>
            <img src={lightningSvg} alt="lightningSvg" class="absolute right-[172px] top-[121px] size-[38px]" />
            <img
                src={baliseShieldSvg}
                alt="baliseShieldSvg"
                class="absolute left-[175px] top-[190px] h-[80px] w-[103px]"
            />
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
