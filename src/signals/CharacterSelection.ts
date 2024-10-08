import { signal } from "@preact/signals";
import { Character } from "../types/types";

export const selectedCharacter = signal<Character>(2);
