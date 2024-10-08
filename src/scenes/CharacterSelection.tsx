import { characterData } from "../data/CharacterData";
import { useState } from "preact/hooks";
import motionImage from "../assets/cards/3.png?w=272&h=190&format=webp&imagetools";
import designImage from "../assets/cards/1.png?w=1440&h=1024&format=webp&imagetools";
import codeImage from "../assets/cards/2.png?w=1440&h=1024&format=webp&imagetools";
import lightning from "../icons/lightning.svg";
import asterisk from "../icons/asterisk.svg";
import asteriskLarge from "../icons/asterisk_large.svg";
import baliseLarge from "../icons/balise_large.svg";
import cursorLarge from "../icons/cursor_large.svg";
import baliseShield from "../icons/balise_shield.svg";
import CollaboratorCursor from "../components/ui/CollaboratorCursor";
import Button from "../components/ui/Button";
import { message } from "../signals/Message";
import { selectedCharacter } from "../signals/CharacterSelection";
import { Character, Scene } from "../types/types";
import CharacterCard from "../components/CharacterCard";

const images = {
    designImage: designImage,
    codeImage: codeImage,
    motionImage: motionImage,
};

const Icons = {
    asteriskLarge: asteriskLarge,
    cursorLarge: cursorLarge,
    baliseLarge: baliseLarge,
};

interface Props {
    onSceneComplete: (nextScene: Scene) => void;
}

export default function CharacterSelection({ onSceneComplete }: Props) {
    message.value = "PICK A CHAMPION !";

    const [selectedCard, setSelectedCard] = useState<Character>(2);

    const handleSectionClick = (cardId: number) => {
        if (cardId >= 1 && cardId <= 3) {
            setSelectedCard(cardId as Character);
        }
    };

    const submit = () => {
        selectedCharacter.value = selectedCard;
        onSceneComplete("Duel");
    };

    return (
        <div class="relative h-full max-w-screen-2xl">
            <div class="flex min-h-screen max-w-screen-2xl flex-col items-center justify-between px-[155px] pt-[214px]">
                <section class="auto-col-fr grid cursor-pointer grid-cols-3 gap-4 md:auto-cols-auto">
                    {characterData.map((card) => (
                        <CharacterCard
                            key={card.order}
                            card={card}
                            selectedCard={selectedCard}
                            images={images}
                            Icons={Icons}
                            handleSectionClick={handleSectionClick}
                        />
                    ))}
                </section>
                <section class="flex flex-col items-center pb-[40px]">
                    <Button onClick={submit} size="lg">
                        Select Champion
                    </Button>
                </section>
            </div>
            <img src={lightning} class="absolute right-[153px] top-[89px] size-[38px]" />
            <img src={asterisk} class="absolute left-[111px] top-[859px] size-[30px]" />
            <img src={baliseShield} class="absolute left-[126px] top-[108px] h-[80px] w-[103px]" />
            <div class="absolute right-[110px] top-[900px] rotate-[-15.79deg]">
                <CollaboratorCursor title="@maislina_" side="right" style="orange" isTextColored={false} />
            </div>
            <div class="absolute left-[258px] top-[876px] rotate-[-10.41deg]">
                <CollaboratorCursor title="@sometimecrea" side="right" style="pink" isTextColored={false} />
            </div>
            <div class="absolute left-[876px] top-[128px] rotate-[-1.37deg]">
                <CollaboratorCursor
                    title="@LLCoolChris"
                    side="left"
                    style="blue"
                    flip={true}
                    isTextColored={false}
                />
            </div>
        </div>
    );
}
