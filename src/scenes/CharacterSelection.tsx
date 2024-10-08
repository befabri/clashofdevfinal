import { CharacterCardsData } from "../data/CharacterData";
import { clsx } from "clsx";
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
                    {CharacterCardsData.map((card) => (
                        <article
                            key={card.order}
                            onClick={() => handleSectionClick(card.order)}
                            class={clsx(
                                "relative flex h-full transform flex-col justify-between overflow-hidden rounded-[60px] px-[47px] pb-[98px] pt-[40px] transition-opacity",
                                card.bgColor,
                                card.order == selectedCard
                                    ? "opacity-100 shadow-illuminated hover:opacity-100"
                                    : "opacity-60 hover:opacity-80"
                            )}>
                            <div class="flex w-full flex-row pb-[40px]">
                                <div class="flex w-full flex-row justify-start gap-6">
                                    <div class="flex flex-col gap-1 text-xs font-semibold text-opacity-80">
                                        <p class="uppercase">
                                            <span>NOS HÉROS</span>
                                        </p>
                                        <p>{card.point} pts</p>
                                    </div>
                                    <h2 class="flex-1 text-xs font-bold tracking-tight">{card.title}</h2>
                                </div>
                            </div>
                            <div class="flex h-full w-full flex-col gap-6">
                                <div class="relative flex-shrink">
                                    <img
                                        src={images[card.image.src as keyof typeof images]}
                                        alt={card.image.alt}
                                        width={272}
                                        height={190}
                                        class="h-auto w-full rounded-xl object-contain"
                                    />
                                    <div class="absolute right-[-22px] top-[-27px] flex flex-col-reverse gap-5">
                                        {card.cursors.map((cursor) => (
                                            <CollaboratorCursor
                                                title={"@" + cursor.title}
                                                side="left"
                                                style={cursor.color}
                                                isTextColored={cursor.isTextColored}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div
                                    class="flex flex-1 flex-col justify-start gap-8 text-[12px] font-semibold leading-5 text-cod_black text-opacity-60"
                                    dangerouslySetInnerHTML={{ __html: card.content }}
                                />
                            </div>
                            <img
                                src={Icons[card.icon]}
                                class="absolute bottom-[-39.7px] right-[-3.7px] size-[135px]"
                            />
                        </article>
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
