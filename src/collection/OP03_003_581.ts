
import Card from "../entities/Card";

export default class OP03_003_581 extends Card {
    public static id: string = "OP03_003_581";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal up to 1 card with \"Whitebeard Pirates\" in its types other than [Izou] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-003_b61b2e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_003_581.id
    }
    
    public getType() {
        return OP03_003_581.type
    }
    
    public getImage() {
        return OP03_003_581.image
    }
    
    public getName() {
        return OP03_003_581._name
    }
    
    public getCost(): number {
        return parseInt(OP03_003_581.cost)
    }
}
