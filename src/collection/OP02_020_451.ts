
import Card, { CardType } from "../entities/Card";

export default class OP02_020_451 extends Card {
    public static id: string = "OP02_020_451";
    
    public static _name: string = "Little Oars Jr.";

    public effect: string = "[DON!! x1] [Your Turn] All of your Characters with a type including \"Whitebeard Pirates\" gain +1000 power.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-020_1fb7f9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_020_451.id;
    }
    
    public getType() : CardType {
        return OP02_020_451.type as CardType;
    }
    
    public getImage() {
        return OP02_020_451.image;
    }
    
    public getName() {
        return OP02_020_451._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_020_451.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_020_451.keywords;
    }
    
    public getPower(): number {
        return OP02_020_451.power;
    }

    public getCounter(): number {
        return OP02_020_451.counter;
    }

    public getLife(): number {
        return OP02_020_451.life;
    }
}
