
import Card, { CardType } from "../entities/Card";

export default class OP02_004_301 extends Card {
    public static id: string = "OP02_004_301";
    
    public static _name: string = "Edward Newgate";

    public effect: string = "[On Play] Up to 1 of your Leader gains +2000 until the start of your next turn. Then, you cannot add cards from your Life area to your hand by your effects during this turn.\r\n[When Attacking] [DON!! x2] K.O. up to 1 of your opponent's characters with 3000 or less Power.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-004_0789e6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Four Emperors","Whitebeard Pirates"];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_004_301.id;
    }
    
    public getType() : CardType {
        return OP02_004_301.type as CardType;
    }
    
    public getImage() {
        return OP02_004_301.image;
    }
    
    public getName() {
        return OP02_004_301._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_004_301.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_004_301.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_004_301.archetypes;
    }
    
    public getPower(): number {
        return OP02_004_301.power;
    }

    public getCounter(): number {
        return OP02_004_301.counter;
    }

    public getLife(): number {
        return OP02_004_301.life;
    }
}
