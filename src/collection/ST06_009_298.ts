
import Card, { CardType } from "../entities/Card";

export default class ST06_009_298 extends Card {
    public static id: string = "ST06_009_298";
    
    public static _name: string = "Fullbody";

    public effect: string = "";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-009_f6a6e4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_009_298.id;
    }
    
    public getType() : CardType {
        return ST06_009_298.type as CardType;
    }
    
    public getImage() {
        return ST06_009_298.image;
    }
    
    public getName() {
        return ST06_009_298._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_009_298.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_009_298.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_009_298.archetypes;
    }
    
    public getPower(): number {
        return ST06_009_298.power;
    }

    public getCounter(): number {
        return ST06_009_298.counter;
    }

    public getLife(): number {
        return ST06_009_298.life;
    }
}
