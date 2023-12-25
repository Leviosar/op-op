
import Card, { CardType } from "../entities/Card";

export default class OP02_060_472 extends Card {
    public static id: string = "OP02_060_472";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[On Play] Look at 2 cards from the top of your deck; reveal up to 1 {The Seven Warlords of the Sea} type card and add it to your hand. Then, place the rest at the top or bottom of the deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-060_8efdc1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_060_472.id;
    }
    
    public getType() : CardType {
        return OP02_060_472.type as CardType;
    }
    
    public getImage() {
        return OP02_060_472.image;
    }
    
    public getName() {
        return OP02_060_472._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_060_472.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_060_472.keywords;
    }
    
    public getPower(): number {
        return OP02_060_472.power;
    }

    public getCounter(): number {
        return OP02_060_472.counter;
    }

    public getLife(): number {
        return OP02_060_472.life;
    }
}
