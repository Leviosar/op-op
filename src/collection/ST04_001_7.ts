
import Card, { CardType } from "../entities/Card";

export default class ST04_001_7 extends Card {
    public static id: string = "ST04_001_7";
    
    public static _name: string = "Kaido";

    public effect: string = "[Activate: Main][Once Per Turn] DON!! -7 (You may return the specified number of DON!! cards from your field to your DON!! deck): Trash the top card of your opponent's life.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-001_2580e6_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Four Emperors","Animal Kingdom Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST04_001_7.id;
    }
    
    public getType() : CardType {
        return ST04_001_7.type as CardType;
    }
    
    public getImage() {
        return ST04_001_7.image;
    }
    
    public getName() {
        return ST04_001_7._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_001_7.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_001_7.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_001_7.archetypes;
    }
    
    public getPower(): number {
        return ST04_001_7.power;
    }

    public getCounter(): number {
        return ST04_001_7.counter;
    }

    public getLife(): number {
        return ST04_001_7.life;
    }
}
