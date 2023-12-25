
import Card, { CardType } from "../entities/Card";

export default class OP03_048_603 extends Card {
    public static id: string = "OP03_048_603";
    
    public static _name: string = "Nojiko";

    public effect: string = "[On Play] If your Leader is [Nami], return up to 1 of your opponent's Characters with a cost of 5 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-048_af96a7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_048_603.id;
    }
    
    public getType() : CardType {
        return OP03_048_603.type as CardType;
    }
    
    public getImage() {
        return OP03_048_603.image;
    }
    
    public getName() {
        return OP03_048_603._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_048_603.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_048_603.keywords;
    }
    
    public getPower(): number {
        return OP03_048_603.power;
    }

    public getCounter(): number {
        return OP03_048_603.counter;
    }

    public getLife(): number {
        return OP03_048_603.life;
    }
}
