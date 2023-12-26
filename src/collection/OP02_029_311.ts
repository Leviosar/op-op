
import Card, { CardType } from "../entities/Card";

export default class OP02_029_311 extends Card {
    public static id: string = "OP02_029_311";
    
    public static _name: string = "Carrot";

    public effect: string = "[End of Your Turn] Set up to 1 of your DON!! as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-029_065da4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe"];
    
    public static power: number = 5000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_029_311.id;
    }
    
    public getType() : CardType {
        return OP02_029_311.type as CardType;
    }
    
    public getImage() {
        return OP02_029_311.image;
    }
    
    public getName() {
        return OP02_029_311._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_029_311.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_029_311.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_029_311.archetypes;
    }
    
    public getPower(): number {
        return OP02_029_311.power;
    }

    public getCounter(): number {
        return OP02_029_311.counter;
    }

    public getLife(): number {
        return OP02_029_311.life;
    }
}
