import { Direction } from "../../types/types";
import arrowSvg from "../../icons/arrow.svg";

interface Props {
    direction: Direction;
}

export default function Arrow({ direction }: Props) {
    const rotationStyles = {
        Right: "rotate(180deg)",
        Left: "rotate(0deg  )",
        Up: "rotate(90deg)",
        Down: "rotate(-90deg)",
    };

    return <img src={arrowSvg} class="h-[15px] w-[38px]" style={{ transform: rotationStyles[direction] }} />;
}
