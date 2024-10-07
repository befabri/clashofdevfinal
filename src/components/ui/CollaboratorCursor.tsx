import clsx from "clsx";

interface Props {
    style: "pink" | "green" | "blue" | "mustard" | "orange" | "purple";
    title: string;
    side: "right" | "left";
    isTextColored?: boolean;
    flip?: boolean;
}

const roundedSide = {
    left: "rounded-r-[18.49px] rounded-bl-[18.49px] rounded-tl-[1.54px]",
    right: "rounded-b-[18.49px] rounded-tl-[18.49px] rounded-tr-[1.54px]",
};

const cursorStyles = {
    pink: "text-pink_mid dark:text-pink_light",
    green: "text-green_mid dark:text-green_light",
    blue: "text-blue_dark dark:text-blue_light",
    mustard: "text-mustard_mid dark:text-mustard_light",
    orange: "text-orange_mid dark:text-orange_light",
    purple: "text-purple_mid dark:text-purple_light",
};

const textStyles = {
    pink: "text-pink_light dark:text-pink_dark",
    green: "text-green_light dark:text-green_dark",
    blue: "text-blue_light dark:text-blue_dark",
    mustard: "text-mustard_light dark:text-mustard_dark",
    orange: "text-orange_light dark:text-orange_dark",
    purple: "text-purple_light dark:text-purple_dark",
    white: "text-cod_white dark:text-cod_black",
};

const styles = {
    pink: "bg-pink_mid border-pink_dark dark:border-pink_mid/60 dark:bg-pink_light",
    green: "bg-green_mid border-green_dark dark:border-green_mid/60 dark:bg-green_light",
    blue: "bg-blue_dark border-blue_dark dark:border-blue_mid/60 dark:bg-blue_light",
    mustard: "bg-mustard_mid border-mustard_dark dark:border-mustard_mid/60 dark:bg-mustard_light",
    orange: "bg-orange_mid border-orange_dark dark:border-orange_mid/60 dark:bg-orange_light",
    purple: "bg-purple_mid border-purple_dark dark:border-purple_mid/60 dark:bg-purple_light",
};

export default function CollaboratorCursor({ title, side, style, isTextColored = false, flip = false }: Props) {
    return (
        <div
            name="collaborator_cursor"
            class={clsx(
                "z-30 flex flex-col gap-[1px]",
                side === "right" ? "items-end" : "",
                flip ? "scale-y-[-1]" : ""
            )}>
            <div
                name="cursor"
                class={clsx(
                    "size-[14px]",
                    side === "left" ? "flex items-end justify-end" : "flex items-end justify-start",
                    flip ? "translate-x-[-3px] translate-y-[5px] rotate-[-30.43deg]" : ""
                )}>
                <svg
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={clsx("size-[10px]", cursorStyles[style], side === "left" ? "" : "scale-x-[-1]")}>
                    <defs>
                        <filter id="dropShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow
                                dx="0.1"
                                dy="0.8"
                                stdDeviation="0.5"
                                flood-color="black"
                                flood-opacity="0.2"></feDropShadow>
                        </filter>
                    </defs>
                    <path
                        d="M2.82601 11.4738L1.08747 1.45503L11.001 6.26082L5.94248 7.63193L2.82601 11.4738Z"
                        fill="currentColor"
                        stroke="currentColor"
                        stroke-width="0.631858"
                        filter="url(#dropShadow)"></path>
                </svg>
            </div>
            <div
                name="title"
                class={clsx(
                    "inline-flex items-center border-2 px-[12px] py-[6px]",
                    side === "left" ? "ml-3.5" : "mr-3.5",
                    roundedSide[side],
                    styles[style],
                    isTextColored ? textStyles[style] : textStyles["white"]
                )}>
                <span class={clsx("m-0 select-none p-0 text-xs font-semibold", flip ? "scale-y-[-1]" : "")}>
                    {title}
                </span>
            </div>
        </div>
    );
}
