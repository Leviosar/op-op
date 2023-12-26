
import Card, { CardType } from "../entities/Card";

export default class OP04_056_832 extends Card {
    public static id: string = "OP04_056_832";
    
    public static _name: string = "Gum-Gum Red Roc";

    public effect: string = "[Main] Place up to 1 Character at the bottom of the owner's deck.\r\n[Trigger] Place up to 1 Character with a cost of 4 or less at the bottom of the owner's deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-056_61ab0c_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_056_832.id;
    }
    
    public getType() : CardType {
        return OP04_056_832.type as CardType;
    }
    
    public getImage() {
        return OP04_056_832.image;
    }
    
    public getName() {
        return OP04_056_832._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_056_832.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_056_832.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_056_832.archetypes;
    }
    
    public getPower(): number {
        return OP04_056_832.power;
    }

    public getCounter(): number {
        return OP04_056_832.counter;
    }

    public getLife(): number {
        return OP04_056_832.life;
    }
}
