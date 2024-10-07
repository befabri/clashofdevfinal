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
    lg: "px-[53px] py-[22px]",
    md: "px-4 py-2.5",
};

const styles = {
    primary:
        "bg-beige dark:bg-smoke_dark text-cod_black dark:text-cod_white hover:bg-beige_dark dark:hover:bg-black",
};

export default function LinkButton({ href, style = "primary", size = "md", className, children }: Props) {
    return (
        <a
            href={href}
            class={clsx(
                sizes[size],
                styles[style],
                "rounded-full text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 tracking-tight text-sm font-semibold",
                className
            )}>
            {children}
        </a>
    );
}
