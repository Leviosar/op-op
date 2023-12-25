
import Card, { CardType } from "../entities/Card";

export default class OP03_099_549 extends Card {
    public static id: string = "OP03_099_549";
    
    public static _name: string = "Charlotte Katakuri";

    public effect: string = "[DON!!x1] [When Attacking] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area. Then, this Leader gains +1000 Power for this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-099_5fb0a0_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP03_099_549.id;
    }
    
    public getType() : CardType {
        return OP03_099_549.type as CardType;
    }
    
    public getImage() {
        return OP03_099_549.image;
    }
    
    public getName() {
        return OP03_099_549._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_099_549.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_099_549.keywords;
    }
    
    public getPower(): number {
        return OP03_099_549.power;
    }

    public getCounter(): number {
        return OP03_099_549.counter;
    }

    public getLife(): number {
        return OP03_099_549.life;
    }
}
