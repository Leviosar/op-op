
import Card from "../entities/Card";

export default class OP03_089_792 extends Card {
    public static id: string = "OP03_089_792";
    
    public static _name: string = "Brannew";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal up to 1 {Navy} type card other than [Brannew] and add it to your hand. Then, trash the remaining cards.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-089_ab8548_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_089_792.id
    }
    
    public getType() {
        return OP03_089_792.type
    }
    
    public getImage() {
        return OP03_089_792.image
    }
    
    public getName() {
        return OP03_089_792._name
    }
}
