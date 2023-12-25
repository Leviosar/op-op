
import Card, { CardType } from "../entities/Card";

export default class OP04_043_822 extends Card {
    public static id: string = "OP04_043_822";
    
    public static _name: string = "Ulti";

    public effect: string = "[DON!! x1] [When Attacking] Return up to 1 Character with a cost of 2 or less to the owner's hand or the bottom of their deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-043_de3c14_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_043_822.id;
    }
    
    public getType() : CardType {
        return OP04_043_822.type as CardType;
    }
    
    public getImage() {
        return OP04_043_822.image;
    }
    
    public getName() {
        return OP04_043_822._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_043_822.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_043_822.keywords;
    }
    
    public getPower(): number {
        return OP04_043_822.power;
    }

    public getCounter(): number {
        return OP04_043_822.counter;
    }

    public getLife(): number {
        return OP04_043_822.life;
    }
}
