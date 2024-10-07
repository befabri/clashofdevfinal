import Osu from "../components/Osu";
import Score from "../components/Score";
import design from "../assets/cards/1.png?w=1440&h=1024&format=webp&imagetools";
import code from "../assets/cards/2.png?w=1440&h=1024&format=webp&imagetools";
import { selectedCharacter } from "../pages/Play";
import Opponents from "../components/Opponents";
import { animationState, message } from "../signals/Message";
import { useEffect } from "preact/hooks";

export default function Duel() {
    useEffect(() => {
        message.value = "Get Ready!";
        animationState.value = "vsAppeared";
    }, []);

    return (
        <div class="relative flex h-screen w-full flex-col justify-center overflow-hidden">
            <div
                class="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${selectedCharacter.value === 2 ? design : code})` }}></div>
            <div class="relative z-10 flex h-full flex-col gap-[30px]">
                <div class="mx-auto flex flex-row items-center justify-center pt-[136px]">
                    <Score />
                </div>
                <div class="relative mx-auto flex h-full w-full flex-1 flex-row items-center justify-center">
                    <Opponents />
                </div>
                <div class="flex w-full flex-col justify-center gap-10 overflow-hidden pb-[40px] pt-[30px]">
                    <Osu />
                </div>
            </div>
        </div>
    );
}
