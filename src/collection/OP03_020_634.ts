
import Card from "../entities/Card";

export default class OP03_020_634 extends Card {
    public static id: string = "OP03_020_634";
    
    public static _name: string = "Striker";

    public effect: string = "[Activate: Main] (2) You may rest this Stage: If your Leader is [Portgas D. Ace], look at the top 5 cards of your deck, reveal up to 1 Event card and add it to your hand. Then, place the rest of the cards at the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-020_ebfc51_jp.jpg";
    
    public static type = "stage";
    
    public getId() {
        return OP03_020_634.id
    }
    
    public getType() {
        return OP03_020_634.type
    }
    
    public getImage() {
        return OP03_020_634.image
    }
    
    public getName() {
        return OP03_020_634._name
    }
}
