
import Card, { CardType } from "../entities/Card";

export default class ST06_010_302 extends Card {
    public static id: string = "ST06_010_302";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] -3 cost for up to 1 of your opponent's Characters during this turn.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-010_165ce6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_010_302.id;
    }
    
    public getType() : CardType {
        return ST06_010_302.type as CardType;
    }
    
    public getImage() {
        return ST06_010_302.image;
    }
    
    public getName() {
        return ST06_010_302._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_010_302.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_010_302.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_010_302.archetypes;
    }
    
    public getPower(): number {
        return ST06_010_302.power;
    }

    public getCounter(): number {
        return ST06_010_302.counter;
    }

    public getLife(): number {
        return ST06_010_302.life;
    }
}
