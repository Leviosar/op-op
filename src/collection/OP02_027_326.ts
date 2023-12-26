
import Card, { CardType } from "../entities/Card";

export default class OP02_027_326 extends Card {
    public static id: string = "OP02_027_326";
    
    public static _name: string = "Inuarashi";

    public effect: string = "If all your DON!! are rested, this Character can't leave the field due to your opponent's effects.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-027_1be48d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_027_326.id;
    }
    
    public getType() : CardType {
        return OP02_027_326.type as CardType;
    }
    
    public getImage() {
        return OP02_027_326.image;
    }
    
    public getName() {
        return OP02_027_326._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_027_326.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_027_326.keywords;
    }
    
    public getPower(): number {
        return OP02_027_326.power;
    }

    public getCounter(): number {
        return OP02_027_326.counter;
    }

    public getLife(): number {
        return OP02_027_326.life;
    }
}
