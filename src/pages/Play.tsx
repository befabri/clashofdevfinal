import Win from "../scenes/Win";
import { useEffect, useState } from "preact/hooks";
import CharacterSelection from "../scenes/CharacterSelection";
import Duel from "../scenes/Duel";
import Loose from "../scenes/Loose";
import { Scene } from "../types/types";
import { animationState } from "../signals/Message";
import { Mobile } from "../components/Mobile";

export function Play() {
    animationState.value = "Cancel";

    const [currentScene, setCurrentScene] = useState<Scene>("CharacterSelection");

    const handleSceneComplete = (nextScene: Scene) => {
        setCurrentScene(nextScene);
    };

    const checkIfMobile = () => {
        const isMobile = window.innerWidth <= 1220 || window.innerHeight <= 885;
        if (isMobile) {
            setCurrentScene("Mobile");
        } else if (currentScene === "Mobile") {
            setCurrentScene("CharacterSelection");
        }
    };

    useEffect(() => {
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, [currentScene]);

    return (
        <>
            {currentScene === "CharacterSelection" && <CharacterSelection onSceneComplete={handleSceneComplete} />}
            {currentScene === "Duel" && <Duel onSceneComplete={handleSceneComplete} />}
            {currentScene === "Result" && <Win onSceneComplete={handleSceneComplete} />}
            {currentScene === "Loose" && <Loose onSceneComplete={handleSceneComplete} />}
            {currentScene === "Mobile" && <Mobile />}
        </>
    );
}
