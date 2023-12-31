
import Card, { CardType } from "../entities/Card";

export default class ST04_016_14 extends Card {
    public static id: string = "ST04_016_14";
    
    public static _name: string = "Blast Breath";

    public effect: string = "[Counter] [Don!! -1] (Return 1 of your DON!! cards to your DON!! deck.) \r\nFor this battle,  your Leader or 1 of your Characters gets +4000 power.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-016_b3f8c0_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Four Emperors","Animal Kingdom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_016_14.id;
    }
    
    public getType() : CardType {
        return ST04_016_14.type as CardType;
    }
    
    public getImage() {
        return ST04_016_14.image;
    }
    
    public getName() {
        return ST04_016_14._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_016_14.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_016_14.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_016_14.archetypes;
    }
    
    public getPower(): number {
        return ST04_016_14.power;
    }

    public getCounter(): number {
        return ST04_016_14.counter;
    }

    public getLife(): number {
        return ST04_016_14.life;
    }
}
