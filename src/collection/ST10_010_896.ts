
import Card, { CardType } from "../entities/Card";

export default class ST10_010_896 extends Card {
    public static id: string = "ST10_010_896";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your opponent has 7 or more cards in their hand, trash 2 cards from your opponent's hand.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-010_30b813_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST10_010_896.id;
    }
    
    public getType() : CardType {
        return ST10_010_896.type as CardType;
    }
    
    public getImage() {
        return ST10_010_896.image;
    }
    
    public getName() {
        return ST10_010_896._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_010_896.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_010_896.keywords;
    }
}
