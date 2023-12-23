
import Card, { CardType } from "../entities/Card";

export default class OP04_048_771 extends Card {
    public static id: string = "OP04_048_771";
    
    public static _name: string = "Sasaki";

    public effect: string = "[On Play] Return all cards in your hand to your deck, and shuffle your deck. Then, draw cards equal to the number of cards returned to the deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-046_b159ca_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP04_048_771.id;
    }
    
    public getType() : CardType {
        return OP04_048_771.type as CardType;
    }
    
    public getImage() {
        return OP04_048_771.image;
    }
    
    public getName() {
        return OP04_048_771._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_048_771.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_048_771.keywords;
    }
}
