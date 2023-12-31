
import Card, { CardType } from "../entities/Card";

export default class OP04_073_843 extends Card {
    public static id: string = "OP04_073_843";
    
    public static _name: string = "Mr. 13 & Ms. Friday";

    public effect: string = "[Activate: Main] You may trash this Character and 1 of your Characters with a type including \"Baroque Works\": Add up to 1 DON!! card from your DON!! deck and set it as active.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-073_7b9f76_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal","Baroque Works"];
    
    public static power: number = 1000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_073_843.id;
    }
    
    public getType() : CardType {
        return OP04_073_843.type as CardType;
    }
    
    public getImage() {
        return OP04_073_843.image;
    }
    
    public getName() {
        return OP04_073_843._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_073_843.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_073_843.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_073_843.archetypes;
    }
    
    public getPower(): number {
        return OP04_073_843.power;
    }

    public getCounter(): number {
        return OP04_073_843.counter;
    }

    public getLife(): number {
        return OP04_073_843.life;
    }
}
