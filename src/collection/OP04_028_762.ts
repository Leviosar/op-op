
import Card, { CardType } from "../entities/Card";

export default class OP04_028_762 extends Card {
    public static id: string = "OP04_028_762";
    
    public static _name: string = "Diamante";

    public effect: string = "<Blocker>\r\n[DONx1] [End of Your Turn] If you have 2 or more active DON!!, set this character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-028_2cbb2a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Donquixote Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_028_762.id;
    }
    
    public getType() : CardType {
        return OP04_028_762.type as CardType;
    }
    
    public getImage() {
        return OP04_028_762.image;
    }
    
    public getName() {
        return OP04_028_762._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_028_762.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_028_762.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_028_762.archetypes;
    }
    
    public getPower(): number {
        return OP04_028_762.power;
    }

    public getCounter(): number {
        return OP04_028_762.counter;
    }

    public getLife(): number {
        return OP04_028_762.life;
    }
}
