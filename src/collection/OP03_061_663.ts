
import Card, { CardType } from "../entities/Card";

export default class OP03_061_663 extends Card {
    public static id: string = "OP03_061_663";
    
    public static _name: string = "Kiwi & Mozu";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-061_5a7f6d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_061_663.id;
    }
    
    public getType() : CardType {
        return OP03_061_663.type as CardType;
    }
    
    public getImage() {
        return OP03_061_663.image;
    }
    
    public getName() {
        return OP03_061_663._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_061_663.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_061_663.keywords;
    }
    
    public getPower(): number {
        return OP03_061_663.power;
    }

    public getCounter(): number {
        return OP03_061_663.counter;
    }

    public getLife(): number {
        return OP03_061_663.life;
    }
}
