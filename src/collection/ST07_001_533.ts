
import Card, { CardType } from "../entities/Card";

export default class ST07_001_533 extends Card {
    public static id: string = "ST07_001_533";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[When Attacking] [DON!! x2] You may add 1 card from the top or bottom of your Life area to your hand: If your life is at 2 or less, you may place up to 1 card from your hand a the top of your Life area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-001_5fa0a6_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Four Emperors","Big Mom Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST07_001_533.id;
    }
    
    public getType() : CardType {
        return ST07_001_533.type as CardType;
    }
    
    public getImage() {
        return ST07_001_533.image;
    }
    
    public getName() {
        return ST07_001_533._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_001_533.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_001_533.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_001_533.archetypes;
    }
    
    public getPower(): number {
        return ST07_001_533.power;
    }

    public getCounter(): number {
        return ST07_001_533.counter;
    }

    public getLife(): number {
        return ST07_001_533.life;
    }
}
