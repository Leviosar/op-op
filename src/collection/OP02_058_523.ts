
import Card from "../entities/Card";

export default class OP02_058_523 extends Card {
    public static id: string = "OP02_058_523";
    
    public static _name: string = "Buggy";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal up to 1 Blue {Impel Down} type card other than [Buggy] and add it to your hand. Place the remaining cards at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-058_04dbfb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_058_523.id
    }
    
    public getType() {
        return OP02_058_523.type
    }
    
    public getImage() {
        return OP02_058_523.image
    }
    
    public getName() {
        return OP02_058_523._name
    }
}
