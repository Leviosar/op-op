
import Card, { CardType } from "../entities/Card";

export default class OP02_077_482 extends Card {
    public static id: string = "OP02_077_482";
    
    public static _name: string = "Solitaire";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-077_bc8b33_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_077_482.id;
    }
    
    public getType() : CardType {
        return OP02_077_482.type as CardType;
    }
    
    public getImage() {
        return OP02_077_482.image;
    }
    
    public getName() {
        return OP02_077_482._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_077_482.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_077_482.keywords;
    }
    
    public getPower(): number {
        return OP02_077_482.power;
    }

    public getCounter(): number {
        return OP02_077_482.counter;
    }

    public getLife(): number {
        return OP02_077_482.life;
    }
}
