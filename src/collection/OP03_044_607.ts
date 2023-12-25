
import Card, { CardType } from "../entities/Card";

export default class OP03_044_607 extends Card {
    public static id: string = "OP03_044_607";
    
    public static _name: string = "Kaya";

    public effect: string = "[On Play] Draw 2 cards, then trash 2 cards from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-044_945282_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_044_607.id;
    }
    
    public getType() : CardType {
        return OP03_044_607.type as CardType;
    }
    
    public getImage() {
        return OP03_044_607.image;
    }
    
    public getName() {
        return OP03_044_607._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_044_607.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_044_607.keywords;
    }
    
    public getPower(): number {
        return OP03_044_607.power;
    }

    public getCounter(): number {
        return OP03_044_607.counter;
    }

    public getLife(): number {
        return OP03_044_607.life;
    }
}
