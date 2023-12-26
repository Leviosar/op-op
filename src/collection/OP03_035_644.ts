
import Card, { CardType } from "../entities/Card";

export default class OP03_035_644 extends Card {
    public static id: string = "OP03_035_644";
    
    public static _name: string = "Momoo";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-035_e7a36f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_035_644.id;
    }
    
    public getType() : CardType {
        return OP03_035_644.type as CardType;
    }
    
    public getImage() {
        return OP03_035_644.image;
    }
    
    public getName() {
        return OP03_035_644._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_035_644.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_035_644.keywords;
    }
    
    public getPower(): number {
        return OP03_035_644.power;
    }

    public getCounter(): number {
        return OP03_035_644.counter;
    }

    public getLife(): number {
        return OP03_035_644.life;
    }
}
