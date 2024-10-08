import Win from "../scenes/Win";
import { useState } from "preact/hooks";
import CharacterSelection from "../scenes/CharacterSelection";
import Duel from "../scenes/Duel";
import Loose from "../scenes/Loose";
import { Scene } from "../types/types";
import { animationState } from "../signals/Message";

export function Play() {
    animationState.value = "Cancel";

    const [currentScene, setCurrentScene] = useState<Scene>("CharacterSelection");

    const handleSceneComplete = (nextScene: Scene) => {
        setCurrentScene(nextScene);
    };

    return (
        <>
            {currentScene === "CharacterSelection" && <CharacterSelection onSceneComplete={handleSceneComplete} />}
            {currentScene === "Duel" && <Duel onSceneComplete={handleSceneComplete} />}
            {currentScene === "Result" && <Win onSceneComplete={handleSceneComplete} />}
            {currentScene === "Loose" && <Loose onSceneComplete={handleSceneComplete} />}
        </>
    );
}
