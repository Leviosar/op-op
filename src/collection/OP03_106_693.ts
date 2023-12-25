
import Card, { CardType } from "../entities/Card";

export default class OP03_106_693 extends Card {
    public static id: string = "OP03_106_693";
    
    public static _name: string = "Charlotte Oven";

    public effect: string = "[DON!! x1] [When Attacking] You may discard 1 card with [Trigger] from your hand: This Character gains +3000 power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-106_541f1e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_106_693.id;
    }
    
    public getType() : CardType {
        return OP03_106_693.type as CardType;
    }
    
    public getImage() {
        return OP03_106_693.image;
    }
    
    public getName() {
        return OP03_106_693._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_106_693.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_106_693.keywords;
    }
    
    public getPower(): number {
        return OP03_106_693.power;
    }

    public getCounter(): number {
        return OP03_106_693.counter;
    }

    public getLife(): number {
        return OP03_106_693.life;
    }
}
