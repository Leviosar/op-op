
import Card, { CardType } from "../entities/Card";

export default class ST06_001_265 extends Card {
    public static id: string = "ST06_001_265";
    
    public static _name: string = "Sakazuki";

    public effect: string = "[Activate: Main] [Once per Turn] (3) (You may rest the designated number for DON!! in your Cost Area) You may trash 1 card from your hand: K.O. up to 1 of your opponent's characters that costs 0.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-001_f1ba4d_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST06_001_265.id;
    }
    
    public getType() : CardType {
        return ST06_001_265.type as CardType;
    }
    
    public getImage() {
        return ST06_001_265.image;
    }
    
    public getName() {
        return ST06_001_265._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_001_265.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_001_265.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_001_265.archetypes;
    }
    
    public getPower(): number {
        return ST06_001_265.power;
    }

    public getCounter(): number {
        return ST06_001_265.counter;
    }

    public getLife(): number {
        return ST06_001_265.life;
    }
}
