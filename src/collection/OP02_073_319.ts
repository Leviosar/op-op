
import Card, { CardType } from "../entities/Card";

export default class OP02_073_319 extends Card {
    public static id: string = "OP02_073_319";
    
    public static _name: string = "Sadi";

    public effect: string = "[On Play] Play up to 1 Character card with the {Jailer Beast} type from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-073_55c46d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_073_319.id;
    }
    
    public getType() : CardType {
        return OP02_073_319.type as CardType;
    }
    
    public getImage() {
        return OP02_073_319.image;
    }
    
    public getName() {
        return OP02_073_319._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_073_319.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_073_319.keywords;
    }
    
    public getPower(): number {
        return OP02_073_319.power;
    }

    public getCounter(): number {
        return OP02_073_319.counter;
    }

    public getLife(): number {
        return OP02_073_319.life;
    }
}
