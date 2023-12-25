
import Card, { CardType } from "../entities/Card";

export default class OP03_079_598 extends Card {
    public static id: string = "OP03_079_598";
    
    public static _name: string = "Vergo";

    public effect: string = "[DON!! x1] This Character cannot be K.O.ed by battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-079_099158_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_079_598.id;
    }
    
    public getType() : CardType {
        return OP03_079_598.type as CardType;
    }
    
    public getImage() {
        return OP03_079_598.image;
    }
    
    public getName() {
        return OP03_079_598._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_079_598.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_079_598.keywords;
    }
    
    public getPower(): number {
        return OP03_079_598.power;
    }

    public getCounter(): number {
        return OP03_079_598.counter;
    }

    public getLife(): number {
        return OP03_079_598.life;
    }
}
