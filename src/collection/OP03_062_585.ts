
import Card from "../entities/Card";

export default class OP03_062_585 extends Card {
    public static id: string = "OP03_062_585";
    
    public static _name: string = "Kokoro";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck, reveal up to 1 [Water 7] type card other than [Kokoro] and add it to your hand. Then, place the rest at the bottom of the deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-062_a29a61_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_062_585.id
    }
    
    public getType() {
        return OP03_062_585.type
    }
    
    public getImage() {
        return OP03_062_585.image
    }
    
    public getName() {
        return OP03_062_585._name
    }
    
    public getCost(): number {
        return parseInt(OP03_062_585.cost)
    }
}
