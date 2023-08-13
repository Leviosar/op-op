
import Card from "../entities/Card";

export default class OP04_046_770 extends Card {
    public static id: string = "OP04_046_770";
    
    public static _name: string = "Queen";

    public effect: string = "[On Play] If your Leader has the {Animal Kingdom Pirates} type, look at the top 7 cards of your deck, reveal up to 2 total [Plague Rounds] or [Ice Oni] and add them to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-046_d01e03_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_046_770.id
    }
    
    public getType() {
        return OP04_046_770.type
    }
    
    public getImage() {
        return OP04_046_770.image
    }
    
    public getName() {
        return OP04_046_770._name
    }
}
