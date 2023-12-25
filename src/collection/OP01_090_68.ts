
import Card, { CardType } from "../entities/Card";

export default class OP01_090_68 extends Card {
    public static id: string = "OP01_090_68";
    
    public static _name: string = "Baroque Works";

    public effect: string = "[Main] Look at the top 5 cards of your deck, reveal 1 {Baroque Works} type card other than (Baroque Works) and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-090_5d5cb6_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_090_68.id;
    }
    
    public getType() : CardType {
        return OP01_090_68.type as CardType;
    }
    
    public getImage() {
        return OP01_090_68.image;
    }
    
    public getName() {
        return OP01_090_68._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_090_68.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_090_68.keywords;
    }
    
    public getPower(): number {
        return OP01_090_68.power;
    }

    public getCounter(): number {
        return OP01_090_68.counter;
    }

    public getLife(): number {
        return OP01_090_68.life;
    }
}
