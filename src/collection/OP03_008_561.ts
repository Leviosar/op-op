
import Card from "../entities/Card";

export default class OP03_008_561 extends Card {
    public static id: string = "OP03_008_561";
    
    public static _name: string = "Buggy";

    public effect: string = "This Character can't be K.O.'ed in battle with Slash attribute Characters and Leaders.\r\n\r\n[On Play] Look at the top 5 cards of your deck, reveal up to 1 Red Event card and add it to your hand. Place the rest of the cards at the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-008_e9736e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_008_561.id
    }
    
    public getType() {
        return OP03_008_561.type
    }
    
    public getImage() {
        return OP03_008_561.image
    }
    
    public getName() {
        return OP03_008_561._name
    }
    
    public getCost(): number {
        return parseInt(OP03_008_561.cost)
    }
}
