
import Card, { CardType } from "../entities/Card";

export default class OP03_112_617 extends Card {
    public static id: string = "OP03_112_617";
    
    public static _name: string = "Charlotte Pudding";

    public effect: string = "[On Play] Look at the top 4 cards of your deck, reveal 1 {Big Mom Pirates} type card other than [Charlotte Pudding] or 1 [Sanji] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-112_5095eb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_112_617.id;
    }
    
    public getType() : CardType {
        return OP03_112_617.type as CardType;
    }
    
    public getImage() {
        return OP03_112_617.image;
    }
    
    public getName() {
        return OP03_112_617._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_112_617.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_112_617.keywords;
    }
}
