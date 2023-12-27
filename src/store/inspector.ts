import { defineStore } from "pinia";
import Card from "../entities/Card";

interface InspectorState {
    current: Card | null;
}

export const inspector = defineStore('inspector', {
    state: (): InspectorState => ({
        current: null,
    }),
    actions: {
        async change(card: Card) {
            this.current = card;
        },
        clear() {
            this.current = null;
        }
    }
})