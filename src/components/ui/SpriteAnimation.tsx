import { useEffect, useState } from "preact/hooks";

interface Image {
    src: string;
    alt: string;
}

interface Props {
    imageOne: Image;
    imageTwo: Image;
    hitZoneStatus: string;
}

export default function SpriteAnimation({ imageOne, imageTwo, hitZoneStatus }: Props) {
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFrame((prevFrame) => (prevFrame + 1) % 9);
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <img
                src={imageOne.src}
                alt={imageOne.alt}
                width={416}
                height={400}
                class={`h-auto object-contain ${frame === 0 || frame === 8 ? "block" : "hidden"}`}
            />
            <img
                src={imageTwo.src}
                alt={imageTwo.alt}
                width={416}
                height={400}
                class={`h-auto object-contain ${frame === 2 || frame === 4 || frame === 6 ? "block" : "hidden"}`}
            />
        </>
    );
}
