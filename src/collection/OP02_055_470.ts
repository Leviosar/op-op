
import Card, { CardType } from "../entities/Card";

export default class OP02_055_470 extends Card {
    public static id: string = "OP02_055_470";
    
    public static _name: string = "Cabaji";

    public effect: string = "[On Play] If you have [Mohji], draw 2 cards and trash 1 card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-055_5fd9cc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_055_470.id;
    }
    
    public getType() : CardType {
        return OP02_055_470.type as CardType;
    }
    
    public getImage() {
        return OP02_055_470.image;
    }
    
    public getName() {
        return OP02_055_470._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_055_470.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_055_470.keywords;
    }
    
    public getPower(): number {
        return OP02_055_470.power;
    }

    public getCounter(): number {
        return OP02_055_470.counter;
    }

    public getLife(): number {
        return OP02_055_470.life;
    }
}
