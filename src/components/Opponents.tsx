import design from "../assets/design.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import king from "../assets/king.png?w=416&h=401&format=webp&hasAlpha=true&imagetools";
import code from "../assets/code.png?w=416&h=400&format=webp&hasAlpha=true&imagetools";
import { selectedCharacter } from "../pages/Play";

export default function Opponents() {
    return (
        <div class="flex h-full w-full flex-row items-end justify-between px-[32px]">
            {selectedCharacter.value === 2 && (
                <img src={design} alt="A design" width={416} height={400} class="h-auto object-contain" />
            )}
            {selectedCharacter.value === 3 && (
                <img src={code} alt="A code" width={416} height={400} class="h-auto object-contain" />
            )}
            <img src={king} alt="A king" width={416} height={400} class="h-auto object-contain" />
        </div>
    );
}
