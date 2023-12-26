
import Card, { CardType } from "../entities/Card";

export default class ST06_003_295 extends Card {
    public static id: string = "ST06_003_295";
    
    public static _name: string = "Django";

    public effect: string = "";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-003_061d58_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_003_295.id;
    }
    
    public getType() : CardType {
        return ST06_003_295.type as CardType;
    }
    
    public getImage() {
        return ST06_003_295.image;
    }
    
    public getName() {
        return ST06_003_295._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_003_295.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_003_295.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_003_295.archetypes;
    }
    
    public getPower(): number {
        return ST06_003_295.power;
    }

    public getCounter(): number {
        return ST06_003_295.counter;
    }

    public getLife(): number {
        return ST06_003_295.life;
    }
}
