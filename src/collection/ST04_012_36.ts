
import Card, { CardType } from "../entities/Card";

export default class ST04_012_36 extends Card {
    public static id: string = "ST04_012_36";
    
    public static _name: string = "Page One";

    public effect: string = "";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-012_94a7e2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_012_36.id;
    }
    
    public getType() : CardType {
        return ST04_012_36.type as CardType;
    }
    
    public getImage() {
        return ST04_012_36.image;
    }
    
    public getName() {
        return ST04_012_36._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_012_36.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_012_36.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_012_36.archetypes;
    }
    
    public getPower(): number {
        return ST04_012_36.power;
    }

    public getCounter(): number {
        return ST04_012_36.counter;
    }

    public getLife(): number {
        return ST04_012_36.life;
    }
}
