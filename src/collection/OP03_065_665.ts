
import Card, { CardType } from "../entities/Card";

export default class OP03_065_665 extends Card {
    public static id: string = "OP03_065_665";
    
    public static _name: string = "Chimney & Gonbe";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-065_3534c5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_065_665.id;
    }
    
    public getType() : CardType {
        return OP03_065_665.type as CardType;
    }
    
    public getImage() {
        return OP03_065_665.image;
    }
    
    public getName() {
        return OP03_065_665._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_065_665.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_065_665.keywords;
    }
    
    public getPower(): number {
        return OP03_065_665.power;
    }

    public getCounter(): number {
        return OP03_065_665.counter;
    }

    public getLife(): number {
        return OP03_065_665.life;
    }
}
