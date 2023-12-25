import { defineStore } from "pinia";

type LogLevel = "debug" | "info" | "warning" | "error";

interface LogEntry {
    message: string;
    level: LogLevel;
    data: Record<string, any> | null;
    source: string;
}

interface LogState {
    entries: LogEntry[];
}

export const log = defineStore('log', {
    state: (): LogState => ({
        entries: [],
    }),
    getters: {
        entries_: (state) => state.entries,
    },
    actions: {
        async add(
            message: string,
            level: LogLevel = "debug",
            data: Record<string, any> | null = null,
            source: string = "default" 
        ) {
            this.entries.push({
                message,
                level,
                data,
                source
            })
        },
    }
})