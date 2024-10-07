import { signal } from "@preact/signals";

export const message = signal("CLASH TIME!");

export type AnimationStateType = "idle" | "vsAppeared" | "countdown" | "fight" | "complete";
export const animationState = signal<AnimationStateType>("idle");

export const animationDisplay = signal(false);
