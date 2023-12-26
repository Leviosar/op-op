
import Card, { CardType } from "../entities/Card";

export default class OP04_034_816 extends Card {
    public static id: string = "OP04_034_816";
    
    public static _name: string = "Lao G";

    public effect: string = "[End of Your Turn] If you have 3 or more active DON!! cards, K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-034_a2b095_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Donquixote Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_034_816.id;
    }
    
    public getType() : CardType {
        return OP04_034_816.type as CardType;
    }
    
    public getImage() {
        return OP04_034_816.image;
    }
    
    public getName() {
        return OP04_034_816._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_034_816.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_034_816.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_034_816.archetypes;
    }
    
    public getPower(): number {
        return OP04_034_816.power;
    }

    public getCounter(): number {
        return OP04_034_816.counter;
    }

    public getLife(): number {
        return OP04_034_816.life;
    }
}
