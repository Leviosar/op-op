
import Card, { CardType } from "../entities/Card";

export default class OP02_035_336 extends Card {
    public static id: string = "OP02_035_336";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Activate: Main] (1) (You may rest the designated number for DON!! in your Cost Area), you may return this Character to the owner's hand: Play up to 1 Character with a cost of 3 from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-035_9a2887_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_035_336.id;
    }
    
    public getType() : CardType {
        return OP02_035_336.type as CardType;
    }
    
    public getImage() {
        return OP02_035_336.image;
    }
    
    public getName() {
        return OP02_035_336._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_035_336.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_035_336.keywords;
    }
    
    public getPower(): number {
        return OP02_035_336.power;
    }

    public getCounter(): number {
        return OP02_035_336.counter;
    }

    public getLife(): number {
        return OP02_035_336.life;
    }
}
