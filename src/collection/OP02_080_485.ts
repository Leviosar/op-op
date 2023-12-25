
import Card, { CardType } from "../entities/Card";

export default class OP02_080_485 extends Card {
    public static id: string = "OP02_080_485";
    
    public static _name: string = "Douglas Bullet";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-080_6c87e5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_080_485.id;
    }
    
    public getType() : CardType {
        return OP02_080_485.type as CardType;
    }
    
    public getImage() {
        return OP02_080_485.image;
    }
    
    public getName() {
        return OP02_080_485._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_080_485.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_080_485.keywords;
    }
    
    public getPower(): number {
        return OP02_080_485.power;
    }

    public getCounter(): number {
        return OP02_080_485.counter;
    }

    public getLife(): number {
        return OP02_080_485.life;
    }
}
