
import Card, { CardType } from "../entities/Card";

export default class ST02_011_52 extends Card {
    public static id: string = "ST02_011_52";
    
    public static _name: string = "Heat";

    public effect: string = "[Counter+1000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-011_104b84_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Kid Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_011_52.id;
    }
    
    public getType() : CardType {
        return ST02_011_52.type as CardType;
    }
    
    public getImage() {
        return ST02_011_52.image;
    }
    
    public getName() {
        return ST02_011_52._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_011_52.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_011_52.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_011_52.archetypes;
    }
    
    public getPower(): number {
        return ST02_011_52.power;
    }

    public getCounter(): number {
        return ST02_011_52.counter;
    }

    public getLife(): number {
        return ST02_011_52.life;
    }
}
