
import Card, { CardType } from "../entities/Card";

export default class OP03_116_699 extends Card {
    public static id: string = "OP03_116_699";
    
    public static _name: string = "Shirahoshi";

    public effect: string = "[On Play] Draw 3 cards and trash 2 cards from your hand.\r\n[Trigger] Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-116_2aa837_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_116_699.id;
    }
    
    public getType() : CardType {
        return OP03_116_699.type as CardType;
    }
    
    public getImage() {
        return OP03_116_699.image;
    }
    
    public getName() {
        return OP03_116_699._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_116_699.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_116_699.keywords;
    }
    
    public getPower(): number {
        return OP03_116_699.power;
    }

    public getCounter(): number {
        return OP03_116_699.counter;
    }

    public getLife(): number {
        return OP03_116_699.life;
    }
}
