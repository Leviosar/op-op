
import Card, { CardType } from "../entities/Card";

export default class OP03_038_648 extends Card {
    public static id: string = "OP03_038_648";
    
    public static _name: string = "MH5";

    public effect: string = "[Main] Rest up to 2 of your opponent's Characters with a cost of 2 or less.\r\n\r\n[Trigger] Rest up to 1 of your opponent's Characters with a cost of 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-038_22782b_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["East Blue","Krieg Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_038_648.id;
    }
    
    public getType() : CardType {
        return OP03_038_648.type as CardType;
    }
    
    public getImage() {
        return OP03_038_648.image;
    }
    
    public getName() {
        return OP03_038_648._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_038_648.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_038_648.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_038_648.archetypes;
    }
    
    public getPower(): number {
        return OP03_038_648.power;
    }

    public getCounter(): number {
        return OP03_038_648.counter;
    }

    public getLife(): number {
        return OP03_038_648.life;
    }
}
