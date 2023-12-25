
import Card, { CardType } from "../entities/Card";

export default class OP03_100_687 extends Card {
    public static id: string = "OP03_100_687";
    
    public static _name: string = "King Baum";

    public effect: string = "[Trigger] You may trash the top or bottom card of your Life: Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-100_836889_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_100_687.id;
    }
    
    public getType() : CardType {
        return OP03_100_687.type as CardType;
    }
    
    public getImage() {
        return OP03_100_687.image;
    }
    
    public getName() {
        return OP03_100_687._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_100_687.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_100_687.keywords;
    }
    
    public getPower(): number {
        return OP03_100_687.power;
    }

    public getCounter(): number {
        return OP03_100_687.counter;
    }

    public getLife(): number {
        return OP03_100_687.life;
    }
}
