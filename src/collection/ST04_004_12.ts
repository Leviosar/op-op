
import Card, { CardType } from "../entities/Card";

export default class ST04_004_12 extends Card {
    public static id: string = "ST04_004_12";
    
    public static _name: string = "King";

    public effect: string = "[On Play] DON!! -1: (You may return the specified number of DON!! cards from your field to your DON!! deck.): KO up to 1 of your opponent's Characters with a cost of 4 or less. ";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-004_c7e465_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_004_12.id;
    }
    
    public getType() : CardType {
        return ST04_004_12.type as CardType;
    }
    
    public getImage() {
        return ST04_004_12.image;
    }
    
    public getName() {
        return ST04_004_12._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_004_12.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_004_12.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_004_12.archetypes;
    }
    
    public getPower(): number {
        return ST04_004_12.power;
    }

    public getCounter(): number {
        return ST04_004_12.counter;
    }

    public getLife(): number {
        return ST04_004_12.life;
    }
}
