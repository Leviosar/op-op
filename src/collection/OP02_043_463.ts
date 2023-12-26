
import Card, { CardType } from "../entities/Card";

export default class OP02_043_463 extends Card {
    public static id: string = "OP02_043_463";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "Also treat this card's name as [Kozuki Oden] according to the rules.\r\n[On Play] Rest up to 1 of your opponent's Characters with a cost of 6 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-043_68c425_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_043_463.id;
    }
    
    public getType() : CardType {
        return OP02_043_463.type as CardType;
    }
    
    public getImage() {
        return OP02_043_463.image;
    }
    
    public getName() {
        return OP02_043_463._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_043_463.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_043_463.keywords;
    }
    
    public getPower(): number {
        return OP02_043_463.power;
    }

    public getCounter(): number {
        return OP02_043_463.counter;
    }

    public getLife(): number {
        return OP02_043_463.life;
    }
}
