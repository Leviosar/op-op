export default class Card {
    public static id: string = "";

    public static image: string | null = null;

    public static type: "char" | "don" | "leader" | "stage" | "event" | null = null;

    public static name: string = "";

    private tapped: boolean = false;
    
    private summonedAt: number = -1;

    public source: string = "";

    public effect: string = "";

    public getImage(): string {
        return "";
    }

    public getType(): string {
        return "";
    }
}