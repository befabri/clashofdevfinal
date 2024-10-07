import { clsx } from "clsx";

interface Props {
    isFilled: boolean;
    filledClass: string;
    emptyClass: string;
}

export default function ScoreCircle({ isFilled, filledClass, emptyClass }: Props) {
    return <div class={clsx("size-[50px] rounded-full", isFilled ? filledClass : emptyClass)}></div>;
}
