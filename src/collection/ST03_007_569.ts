
import Card from "../entities/Card";

export default class ST03_007_569 extends Card {
    public static id: string = "ST03_007_569";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[DON!! x1] [Activate Main] [Once Per Turn] (2) (Rest the designated amount of DON!! cards in your Cost Area.): Play up to 1 cost 4 or lower [Pacifista] from your deck. Then, shuffle your deck.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-007_40d181_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_007_569.id
    }
    
    public getType() {
        return ST03_007_569.type
    }
    
    public getImage() {
        return ST03_007_569.image
    }
    
    public getName() {
        return ST03_007_569._name
    }
}
