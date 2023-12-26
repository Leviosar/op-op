
import Card, { CardType } from "../entities/Card";

export default class OP03_014_630 extends Card {
    public static id: string = "OP03_014_630";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[When Attacking] Play up to 1 Red Character card with a cost of 1 from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-014_31c749_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_014_630.id;
    }
    
    public getType() : CardType {
        return OP03_014_630.type as CardType;
    }
    
    public getImage() {
        return OP03_014_630.image;
    }
    
    public getName() {
        return OP03_014_630._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_014_630.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_014_630.keywords;
    }
    
    public getPower(): number {
        return OP03_014_630.power;
    }

    public getCounter(): number {
        return OP03_014_630.counter;
    }

    public getLife(): number {
        return OP03_014_630.life;
    }
}
