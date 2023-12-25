
import Card, { CardType } from "../entities/Card";

export default class OP03_056_661 extends Card {
    public static id: string = "OP03_056_661";
    
    public static _name: string = "Sanji's Pilaf";

    public effect: string = "[Main] Draw 2 cards.\r\n\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-056_fa1f2b_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_056_661.id;
    }
    
    public getType() : CardType {
        return OP03_056_661.type as CardType;
    }
    
    public getImage() {
        return OP03_056_661.image;
    }
    
    public getName() {
        return OP03_056_661._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_056_661.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_056_661.keywords;
    }
    
    public getPower(): number {
        return OP03_056_661.power;
    }

    public getCounter(): number {
        return OP03_056_661.counter;
    }

    public getLife(): number {
        return OP03_056_661.life;
    }
}
