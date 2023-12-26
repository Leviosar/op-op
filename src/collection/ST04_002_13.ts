
import Card, { CardType } from "../entities/Card";

export default class ST04_002_13 extends Card {
    public static id: string = "ST04_002_13";
    
    public static _name: string = "Ulti";

    public effect: string = "[On Play] DON!! -1: (You may return the specified number of DON!! cards from your field to your DON!! deck.) Play up to 1 [Page One] character card with a cost of 4 or less from your hand without paying its cost. ";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-002_6def11_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_002_13.id;
    }
    
    public getType() : CardType {
        return ST04_002_13.type as CardType;
    }
    
    public getImage() {
        return ST04_002_13.image;
    }
    
    public getName() {
        return ST04_002_13._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_002_13.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_002_13.keywords;
    }
    
    public getPower(): number {
        return ST04_002_13.power;
    }

    public getCounter(): number {
        return ST04_002_13.counter;
    }

    public getLife(): number {
        return ST04_002_13.life;
    }
}
