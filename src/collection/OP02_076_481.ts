
import Card, { CardType } from "../entities/Card";

export default class OP02_076_481 extends Card {
    public static id: string = "OP02_076_481";
    
    public static _name: string = "Shiryu";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-076_adfb49_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_076_481.id;
    }
    
    public getType() : CardType {
        return OP02_076_481.type as CardType;
    }
    
    public getImage() {
        return OP02_076_481.image;
    }
    
    public getName() {
        return OP02_076_481._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_076_481.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_076_481.keywords;
    }
    
    public getPower(): number {
        return OP02_076_481.power;
    }

    public getCounter(): number {
        return OP02_076_481.counter;
    }

    public getLife(): number {
        return OP02_076_481.life;
    }
}
