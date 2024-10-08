import { signal } from "@preact/signals";
import { HitZoneStatus } from "../types/types";

export const hitZoneStatus = signal<HitZoneStatus>("Idle");
export const successCount = signal(0);
export const failCount = signal(0);
