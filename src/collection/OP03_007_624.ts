
import Card, { CardType } from "../entities/Card";

export default class OP03_007_624 extends Card {
    public static id: string = "OP03_007_624";
    
    public static _name: string = "Namule";

    public effect: string = "This Character cannot attack the Leader on the turn in which it is played.\r\n[DON!! x1] This character gains <Rush>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-007_aabca6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_007_624.id;
    }
    
    public getType() : CardType {
        return OP03_007_624.type as CardType;
    }
    
    public getImage() {
        return OP03_007_624.image;
    }
    
    public getName() {
        return OP03_007_624._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_007_624.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_007_624.keywords;
    }
    
    public getPower(): number {
        return OP03_007_624.power;
    }

    public getCounter(): number {
        return OP03_007_624.counter;
    }

    public getLife(): number {
        return OP03_007_624.life;
    }
}
