
import Card, { CardType } from "../entities/Card";

export default class OP03_081_616 extends Card {
    public static id: string = "OP03_081_616";
    
    public static _name: string = "Kalifa";

    public effect: string = "[On Play] Draw 2 cards, and trash 2 cards from your hand. Then, reduce the cost of up to 1 of your opponent's Characters by 2 for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-081_19ee45_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_081_616.id;
    }
    
    public getType() : CardType {
        return OP03_081_616.type as CardType;
    }
    
    public getImage() {
        return OP03_081_616.image;
    }
    
    public getName() {
        return OP03_081_616._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_081_616.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_081_616.keywords;
    }
    
    public getPower(): number {
        return OP03_081_616.power;
    }

    public getCounter(): number {
        return OP03_081_616.counter;
    }

    public getLife(): number {
        return OP03_081_616.life;
    }
}
