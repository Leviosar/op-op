
import Card from "../entities/Card";

export default class ST10_016_902 extends Card {
    public static id: string = "ST10_016_902";
    
    public static _name: string = "Gum-Gum Kong Gatling";

    public effect: string = "[Main] K.O. up to 1 of your opponent's Characters with 7000 power or less.\r\n[Trigger] Up to 1 of your Leader gains +1000 power until the end of your next turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST10-016_24d955_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST10_016_902.id
    }
    
    public getType() {
        return ST10_016_902.type
    }
    
    public getImage() {
        return ST10_016_902.image
    }
    
    public getName() {
        return ST10_016_902._name
    }
}
