
import Card from "../entities/Card";

export default class OP02_094_494 extends Card {
    public static id: string = "OP02_094_494";
    
    public static _name: string = "Isuka";

    public effect: string = "[DON!! x1] [Once Per Turn] When this Character battles and K.O.'s your opponent's Character, set this Character as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-094_b5be75_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_094_494.id
    }
    
    public getType() {
        return OP02_094_494.type
    }
    
    public getImage() {
        return OP02_094_494.image
    }
    
    public getName() {
        return OP02_094_494._name
    }
}
