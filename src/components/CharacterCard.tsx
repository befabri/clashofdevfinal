import { clsx } from "clsx";
import { CharacterData } from "../data/CharacterData";
import CollaboratorCursor from "./ui/CollaboratorCursor";

interface Props {
    card: CharacterData;
    selectedCard: number;
    images: Record<string, string>;
    Icons: Record<string, string>;
    handleSectionClick: (cardId: number) => void;
}

export default function CharacterCard({ card, selectedCard, images, Icons, handleSectionClick }: Props) {
    return (
        <article
            key={card.order}
            onClick={() => handleSectionClick(card.order)}
            title={card.order === 1 ? "Champion not implemented" : ""}
            class={clsx(
                "relative flex h-full transform flex-col justify-between overflow-hidden rounded-[60px] px-[47px] pb-[98px] pt-[40px] transition-opacity",
                card.bgColor,
                card.order == selectedCard
                    ? "opacity-100 shadow-illuminated hover:opacity-100"
                    : "opacity-60 hover:opacity-80",
                card.order === 1 ? "cursor-default" : "cursor-pointer"
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
            <img src={Icons[card.icon]} class="absolute bottom-[-39.7px] right-[-3.7px] size-[135px]" />
        </article>
    );
}
