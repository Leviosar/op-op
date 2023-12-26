
import Card, { CardType } from "../entities/Card";

export default class OP04_041_769 extends Card {
    public static id: string = "OP04_041_769";
    
    public static _name: string = "Apis";

    public effect: string = "[On Play] You may trash 2 cards in your hand: Look at the top 5 cards of your deck, reveal up to 1 card with the {East Blue} type and add it to your hand. Place the remaining cards at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-041_cb1989_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_041_769.id;
    }
    
    public getType() : CardType {
        return OP04_041_769.type as CardType;
    }
    
    public getImage() {
        return OP04_041_769.image;
    }
    
    public getName() {
        return OP04_041_769._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_041_769.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_041_769.keywords;
    }
    
    public getPower(): number {
        return OP04_041_769.power;
    }

    public getCounter(): number {
        return OP04_041_769.counter;
    }

    public getLife(): number {
        return OP04_041_769.life;
    }
}
