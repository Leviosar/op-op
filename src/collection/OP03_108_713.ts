
import Card, { CardType } from "../entities/Card";

export default class OP03_108_713 extends Card {
    public static id: string = "OP03_108_713";
    
    public static _name: string = "Charlotte Cracker";

    public effect: string = "[DON!! x1] While you have less Life than your opponent, this character gains <Double Attack> and +1000 power. (This card deals 2 damage.)\r\n[Trigger] You may discard 1 card from your hand: Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-108_65f6b3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_108_713.id;
    }
    
    public getType() : CardType {
        return OP03_108_713.type as CardType;
    }
    
    public getImage() {
        return OP03_108_713.image;
    }
    
    public getName() {
        return OP03_108_713._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_108_713.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_108_713.keywords;
    }
    
    public getPower(): number {
        return OP03_108_713.power;
    }

    public getCounter(): number {
        return OP03_108_713.counter;
    }

    public getLife(): number {
        return OP03_108_713.life;
    }
}
