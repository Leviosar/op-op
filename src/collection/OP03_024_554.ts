
import Card, { CardType } from "../entities/Card";

export default class OP03_024_554 extends Card {
    public static id: string = "OP03_024_554";
    
    public static _name: string = "Gin";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 2 of your opponent's Characters that cost 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-024_bf7042_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Krieg Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_024_554.id;
    }
    
    public getType() : CardType {
        return OP03_024_554.type as CardType;
    }
    
    public getImage() {
        return OP03_024_554.image;
    }
    
    public getName() {
        return OP03_024_554._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_024_554.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_024_554.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_024_554.archetypes;
    }
    
    public getPower(): number {
        return OP03_024_554.power;
    }

    public getCounter(): number {
        return OP03_024_554.counter;
    }

    public getLife(): number {
        return OP03_024_554.life;
    }
}
