
import Card, { CardType } from "../entities/Card";

export default class OP02_034_459 extends Card {
    public static id: string = "OP02_034_459";
    
    public static _name: string = "Tony Tony.Chopper";

    public effect: string = "[DON!! x1] [When Attacking] Rest up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-034_969e81_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_034_459.id;
    }
    
    public getType() : CardType {
        return OP02_034_459.type as CardType;
    }
    
    public getImage() {
        return OP02_034_459.image;
    }
    
    public getName() {
        return OP02_034_459._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_034_459.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_034_459.keywords;
    }
    
    public getPower(): number {
        return OP02_034_459.power;
    }

    public getCounter(): number {
        return OP02_034_459.counter;
    }

    public getLife(): number {
        return OP02_034_459.life;
    }
}
