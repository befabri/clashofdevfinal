import { signal } from "@preact/signals";

export const hitZoneStatus = signal<"idle" | "success" | "fail" | "afk">("idle");

export const successCount = signal(0);
export const failCount = signal(0);

hitZoneStatus.subscribe((newValue) => {
    if (newValue === "success") {
        successCount.value += 1;
    } else if (newValue === "fail" || newValue === "afk") {
        failCount.value += 1;
    }
});
