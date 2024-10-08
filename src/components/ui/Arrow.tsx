import { Direction, Status } from "../../types/types";

interface Props {
    direction: Direction;
    color: Status;
}

export default function Arrow({ direction, color }: Props) {
    const rotationStyles = {
        Right: "rotate(180deg)",
        Left: "rotate(0deg  )",
        Up: "rotate(90deg)",
        Down: "rotate(-90deg)",
    };

    return (
        <svg
            viewBox="0 0 42 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-[19px] w-[42px] stroke-beige"
            shape-rendering="geometricPrecision"
            style={{
                transform: rotationStyles[direction],
                stroke: {
                    Idle: "#9B9B9B",
                    Success: "#A2B87E",
                    Fail: "#F28164",
                }[color],
            }}>
            <g filter="url(#filter0_i_1421_237)">
                <path
                    d="M9.6 2L2 9.5M2 9.5L9.6 17M2 9.5L40 9.5"
                    shape-rendering="geometricPrecision"
                    stroke="stroke-beige"
                    stroke-width="3.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_i_1421_237"
                    x="0.100006"
                    y="0.0999756"
                    width="41.8"
                    height="22.8"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1421_237" />
                </filter>
            </defs>
        </svg>
    );
}
