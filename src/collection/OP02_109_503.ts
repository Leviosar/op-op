
import Card from "../entities/Card";

export default class OP02_109_503 extends Card {
    public static id: string = "OP02_109_503";
    
    public static _name: string = "Tsuru";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters −2 cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-109_4db22b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_109_503.id
    }
    
    public getType() {
        return OP02_109_503.type
    }
    
    public getImage() {
        return OP02_109_503.image
    }
    
    public getName() {
        return OP02_109_503._name
    }
}
