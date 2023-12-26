
import Card, { CardType } from "../entities/Card";

export default class ST03_011_95 extends Card {
    public static id: string = "ST03_011_95";
    
    public static _name: string = "Buggy";

    public effect: string = "";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-011_b28325_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Seven Warlords of the Sea","Buggy's Delivery"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_011_95.id;
    }
    
    public getType() : CardType {
        return ST03_011_95.type as CardType;
    }
    
    public getImage() {
        return ST03_011_95.image;
    }
    
    public getName() {
        return ST03_011_95._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_011_95.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_011_95.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_011_95.archetypes;
    }
    
    public getPower(): number {
        return ST03_011_95.power;
    }

    public getCounter(): number {
        return ST03_011_95.counter;
    }

    public getLife(): number {
        return ST03_011_95.life;
    }
}
