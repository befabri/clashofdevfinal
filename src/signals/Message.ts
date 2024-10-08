import { signal } from "@preact/signals";
import { AnimationState } from "../types/types";

export const message = signal("CLASH TIME!");
export const animationState = signal<AnimationState>("Idle");
export const animationDisplay = signal(false);
