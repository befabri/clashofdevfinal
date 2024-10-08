import clsx from "clsx";
import type { ComponentChildren } from "preact";

interface Props {
    children: ComponentChildren;
    href: string;
    size?: "md" | "lg";
    style?: "primary";
    className?: string;
}

const sizes = {
    lg: "px-[1O] py-[18px]",
    md: "px-4 py-2.5",
};

const styles = {
    primary: "bg-beige text-cod_black hover:bg-beige_dark",
};

export default function LinkButton({ href, style = "primary", size = "md", className, children }: Props) {
    return (
        <a
            href={href}
            class={clsx(
                sizes[size],
                styles[style],
                "w-[212px] rounded-full text-center text-[14px] font-semibold leading-[22px] transition",
                className
            )}>
            {children}
        </a>
    );
}
