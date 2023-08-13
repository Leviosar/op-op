
import Card from "../entities/Card";

export default class OP03_086_676 extends Card {
    public static id: string = "OP03_086_676";
    
    public static _name: string = "Spandam";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal up to 1 card with {CP} in its types other than [Spandam] and add it to your hand. Then trash the remaining cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-086_32f4e7_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_086_676.id
    }
    
    public getType() {
        return OP03_086_676.type
    }
    
    public getImage() {
        return OP03_086_676.image
    }
    
    public getName() {
        return OP03_086_676._name
    }
}
