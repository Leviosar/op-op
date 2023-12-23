
import Card, { CardType } from "../entities/Card";

export default class OP03_023_635 extends Card {
    public static id: string = "OP03_023_635";
    
    public static _name: string = "Striker";

    public effect: string = "[Activate: Main] (2) You may rest this Stage: If your Leader is [Portgas D. Ace], look at the top 5 cards of your deck, reveal up to 1 Event card and add it to your hand. Then, place the rest of the cards at the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-023_d6773c_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_023_635.id;
    }
    
    public getType() : CardType {
        return OP03_023_635.type as CardType;
    }
    
    public getImage() {
        return OP03_023_635.image;
    }
    
    public getName() {
        return OP03_023_635._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_023_635.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_023_635.keywords;
    }
}
