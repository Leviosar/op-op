
import Card, { CardType } from "../entities/Card";

export default class OP04_051_828 extends Card {
    public static id: string = "OP04_051_828";
    
    public static _name: string = "Who's Who";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Animal Kingdom Pirates} type card other than [Who's Who] and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-051_81d10c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_051_828.id;
    }
    
    public getType() : CardType {
        return OP04_051_828.type as CardType;
    }
    
    public getImage() {
        return OP04_051_828.image;
    }
    
    public getName() {
        return OP04_051_828._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_051_828.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_051_828.keywords;
    }
    
    public getPower(): number {
        return OP04_051_828.power;
    }

    public getCounter(): number {
        return OP04_051_828.counter;
    }

    public getLife(): number {
        return OP04_051_828.life;
    }
}
