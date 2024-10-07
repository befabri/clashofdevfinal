import { signal } from "@preact/signals";
import { HitZoneStatus } from "../types/types";

export const hitZoneStatus = signal<HitZoneStatus>("Idle");

export const successCount = signal(0);
export const failCount = signal(0);

hitZoneStatus.subscribe((newValue) => {
    if (newValue === "Success") {
        successCount.value += 1;
    } else if (newValue === "Fail" || newValue === "Afk") {
        failCount.value += 1;
    }
});
