
import Card, { CardType } from "../entities/Card";

export default class ST06_013_292 extends Card {
    public static id: string = "ST06_013_292";
    
    public static _name: string = "T-Bone";

    public effect: string = "";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-013_9f4d9e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_013_292.id;
    }
    
    public getType() : CardType {
        return ST06_013_292.type as CardType;
    }
    
    public getImage() {
        return ST06_013_292.image;
    }
    
    public getName() {
        return ST06_013_292._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_013_292.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_013_292.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_013_292.archetypes;
    }
    
    public getPower(): number {
        return ST06_013_292.power;
    }

    public getCounter(): number {
        return ST06_013_292.counter;
    }

    public getLife(): number {
        return ST06_013_292.life;
    }
}
