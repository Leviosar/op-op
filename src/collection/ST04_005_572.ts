
import Card from "../entities/Card";

export default class ST04_005_572 extends Card {
    public static id: string = "ST04_005_572";
    
    public static _name: string = "Queen";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card, you can change the attack target to this card.)\r\n[On Play] DON!! -1 (Return the specified amount of DON!! from your field to your DON!! deck.): Draw 2 cards, then trash 1 card from your hand.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-005_3dda93_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return ST04_005_572.id
    }
    
    public getType() {
        return ST04_005_572.type
    }
    
    public getImage() {
        return ST04_005_572.image
    }
    
    public getName() {
        return ST04_005_572._name
    }
    
    public getCost(): number {
        return parseInt(ST04_005_572.cost)
    }
}
