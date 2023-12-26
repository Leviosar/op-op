
import Card, { CardType } from "../entities/Card";

export default class OP04_020_766 extends Card {
    public static id: string = "OP04_020_766";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -1 cost.\r\n[End of Your Turn] (1): Set up to 1 of your Characters with a cost of 5 or less as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-020_cae8a1_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP04_020_766.id;
    }
    
    public getType() : CardType {
        return OP04_020_766.type as CardType;
    }
    
    public getImage() {
        return OP04_020_766.image;
    }
    
    public getName() {
        return OP04_020_766._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_020_766.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_020_766.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_020_766.archetypes;
    }
    
    public getPower(): number {
        return OP04_020_766.power;
    }

    public getCounter(): number {
        return OP04_020_766.counter;
    }

    public getLife(): number {
        return OP04_020_766.life;
    }
}
