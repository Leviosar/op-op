
import Card, { CardType } from "../entities/Card";

export default class ST03_001_50 extends Card {
    public static id: string = "ST03_001_50";
    
    public static _name: string = "Crocodile";

    public effect: string = "[Activate Main] (Once per Turn) <Don!! -4>: Return up to one cost 5 or lower Character to its owner's hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-001_6be431_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = ["Don!! -4"];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Baroque Works"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST03_001_50.id;
    }
    
    public getType() : CardType {
        return ST03_001_50.type as CardType;
    }
    
    public getImage() {
        return ST03_001_50.image;
    }
    
    public getName() {
        return ST03_001_50._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_001_50.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_001_50.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_001_50.archetypes;
    }
    
    public getPower(): number {
        return ST03_001_50.power;
    }

    public getCounter(): number {
        return ST03_001_50.counter;
    }

    public getLife(): number {
        return ST03_001_50.life;
    }
}
