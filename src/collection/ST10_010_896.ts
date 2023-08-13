
import Card from "../entities/Card";

export default class ST10_010_896 extends Card {
    public static id: string = "ST10_010_896";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your opponent has 7 or more cards in their hand, trash 2 cards from your opponent's hand.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST10-010_30b813_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST10_010_896.id
    }
    
    public getType() {
        return ST10_010_896.type
    }
    
    public getImage() {
        return ST10_010_896.image
    }
    
    public getName() {
        return ST10_010_896._name
    }
}
