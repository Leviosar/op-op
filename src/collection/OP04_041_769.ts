
import Card from "../entities/Card";

export default class OP04_041_769 extends Card {
    public static id: string = "OP04_041_769";
    
    public static _name: string = "Apis";

    public effect: string = "[On Play] You may trash 2 cards in your hand: Look at the top 5 cards of your deck, reveal up to 1 card with the {East Blue} type and add it to your hand. Place the remaining cards at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-041_cb1989_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_041_769.id
    }
    
    public getType() {
        return OP04_041_769.type
    }
    
    public getImage() {
        return OP04_041_769.image
    }
    
    public getName() {
        return OP04_041_769._name
    }
}
