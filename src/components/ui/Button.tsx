import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
    onClick?: any;
    disabled?: boolean;
    size?: "md" | "lg";
    style?: "primary" | "black";
    title?: string;
    className?: string;
    ariaLabel?: string;
}

const sizes = {
    lg: "px-[1O] py-[18px]",
    md: "px-4 py-2.5",
};

const styles = {
    primary: "bg-beige text-cod_black hover:bg-beige_dark",
    black: "bg-cod_black text-cod_white hover:bg-cod_black/90",
};

export default function Button({
    onClick,
    disabled = false,
    style = "primary",
    size = "md",
    className,
    children,
    title,
    ariaLabel,
}: Props) {
    return (
        <button
            aria-label={ariaLabel}
            title={title}
            type="button"
            onClick={onClick}
            disabled={disabled}
            class={clsx(
                sizes[size],
                styles[style],
                "w-[212px] rounded-full text-center text-[14px] font-semibold leading-[22px] transition",
                className
            )}>
            {children}
        </button>
    );
}
