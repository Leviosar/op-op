
import Card, { CardType } from "../entities/Card";

export default class OP03_022_552 extends Card {
    public static id: string = "OP03_022_552";
    
    public static _name: string = "Arlong";

    public effect: string = "[DON!!x2] [When Attacking] (1) (You may rest the designated number for DON!! in your Cost Area): Play up to 1 Character card with a cost of 4 or less with <Trigger> from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-022_345be0_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = ["Trigger"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP03_022_552.id;
    }
    
    public getType() : CardType {
        return OP03_022_552.type as CardType;
    }
    
    public getImage() {
        return OP03_022_552.image;
    }
    
    public getName() {
        return OP03_022_552._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_022_552.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_022_552.keywords;
    }
    
    public getPower(): number {
        return OP03_022_552.power;
    }

    public getCounter(): number {
        return OP03_022_552.counter;
    }

    public getLife(): number {
        return OP03_022_552.life;
    }
}
