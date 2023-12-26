
import Card, { CardType } from "../entities/Card";

export default class OP02_079_484 extends Card {
    public static id: string = "OP02_079_484";
    
    public static _name: string = "Douglas Bullet";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-079_09d86b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_079_484.id;
    }
    
    public getType() : CardType {
        return OP02_079_484.type as CardType;
    }
    
    public getImage() {
        return OP02_079_484.image;
    }
    
    public getName() {
        return OP02_079_484._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_079_484.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_079_484.keywords;
    }
    
    public getPower(): number {
        return OP02_079_484.power;
    }

    public getCounter(): number {
        return OP02_079_484.counter;
    }

    public getLife(): number {
        return OP02_079_484.life;
    }
}
