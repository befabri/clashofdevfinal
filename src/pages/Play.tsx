import { signal } from "@preact/signals";
import Win from "../scenes/Win";
import { useState } from "preact/hooks";
import CharacterSelection from "../scenes/CharacterSelection";
import { message } from "../signals/Message";
import Duel from "../scenes/Duel";

export const selectedCharacter = signal(null);
const gameResult = signal(null);

export function Play() {
    const [currentScene, setCurrentScene] = useState("characterSelection");

    const handleCharacterSelection = (character) => {
        selectedCharacter.value = character;
        message.value = "PARTY";
        setCurrentScene("partySelection");
    };

    const handlePartySelection = (party) => {
        message.value = "YOU ARE READY TO FIGHT!";
        setCurrentScene("result");
    };

    const handleRestart = () => {
        message.value = "PICK A CHAMPION!";
        selectedCharacter.value = null;
        gameResult.value = null;
        setCurrentScene("characterSelection");
    };

    return (
        <>
            {currentScene === "characterSelection" && (
                <CharacterSelection onCharacterSelected={handleCharacterSelection} />
            )}
            {currentScene === "partySelection" && <Duel />}
            {currentScene === "result" && <Win onRestart={handleRestart} />}
        </>
    );
}
