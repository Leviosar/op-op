
import Card from "../entities/Card";

export default class ST03_007_92 extends Card {
    public static id: string = "ST03_007_92";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[DON!! x1] [Activate Main] [Once Per Turn] (2) (Rest the designated amount of DON!! cards in your Cost Area.): Play up to 1 cost 4 or lower [Pacifista] from your deck. Then, shuffle your deck.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-007_0ca718_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_007_92.id
    }
    
    public getType() {
        return ST03_007_92.type
    }
    
    public getImage() {
        return ST03_007_92.image
    }
    
    public getName() {
        return ST03_007_92._name
    }
}
