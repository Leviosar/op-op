
import Card, { CardType } from "../entities/Card";

export default class OP02_058_310 extends Card {
    public static id: string = "OP02_058_310";
    
    public static _name: string = "Buggy";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal up to 1 Blue {Impel Down} type card other than [Buggy] and add it to your hand. Place the remaining cards at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-058_c25f90_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_058_310.id;
    }
    
    public getType() : CardType {
        return OP02_058_310.type as CardType;
    }
    
    public getImage() {
        return OP02_058_310.image;
    }
    
    public getName() {
        return OP02_058_310._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_058_310.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_058_310.keywords;
    }
    
    public getPower(): number {
        return OP02_058_310.power;
    }

    public getCounter(): number {
        return OP02_058_310.counter;
    }

    public getLife(): number {
        return OP02_058_310.life;
    }
}
