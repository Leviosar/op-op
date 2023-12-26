export default interface CardAction {
    id: "summon" | "trigger" | "attack" | "attach";
    name: string;
    condition(): boolean;
} 