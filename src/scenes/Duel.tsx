import Osu from "../components/Osu";
import Score from "../components/Score";
import design from "../assets/cards/1.png?w=1440&h=1024&format=webp&imagetools";
import code from "../assets/cards/2.png?w=1440&h=1024&format=webp&imagetools";
import Opponents from "../components/Opponents";
import { animationState, message } from "../signals/Message";
import { selectedCharacter } from "../signals/CharacterSelection";
import { successCount, failCount, hitZoneStatus, gameResult } from "../signals/HitZoneStatus";
import { effect } from "@preact/signals";
import { Scene } from "../types/types";
import { MAX_SCORE, RECT_COUNT } from "../constants/constants";

interface Props {
    onSceneComplete: (nextScene: Scene) => void;
}

export default function Duel({ onSceneComplete }: Props) {
    message.value = "Get Ready!";
    animationState.value = "VsAppeared";
    successCount.value = 0;
    failCount.value = 0;
    hitZoneStatus.value = "Idle";
    gameResult.value = "Idle";

    effect(() => {
        if (successCount.value > MAX_SCORE) {
            gameResult.value = "Win";
            setTimeout(() => {
                onSceneComplete("Result");
            }, 1700);
        } else if (failCount.value > MAX_SCORE || successCount.value + failCount.value >= RECT_COUNT) {
            gameResult.value = "Loose";
            setTimeout(() => {
                onSceneComplete("Loose");
            }, 1700);
        }
    });

    return (
        <div class="relative flex h-screen w-full flex-col justify-center overflow-hidden">
            <div
                class="absolute inset-0 bg-contain bg-center opacity-20"
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
