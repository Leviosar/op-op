
import Card, { CardType } from "../entities/Card";

export default class ST10_011_897 extends Card {
    public static id: string = "ST10_011_897";
    
    public static _name: string = "Heat";

    public effect: string = "[Your Turn] [Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, this Character gains +2000 power until the start of your next turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-011_7b5d2b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Kid Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_011_897.id;
    }
    
    public getType() : CardType {
        return ST10_011_897.type as CardType;
    }
    
    public getImage() {
        return ST10_011_897.image;
    }
    
    public getName() {
        return ST10_011_897._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_011_897.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_011_897.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_011_897.archetypes;
    }
    
    public getPower(): number {
        return ST10_011_897.power;
    }

    public getCounter(): number {
        return ST10_011_897.counter;
    }

    public getLife(): number {
        return ST10_011_897.life;
    }
}
