
import Card from "../entities/Card";

export default class OP04_032_814 extends Card {
    public static id: string = "OP04_032_814";
    
    public static _name: string = "Baby 5";

    public effect: string = "[End of Your Turn] You may trash this Character: Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-032_5f601b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_032_814.id
    }
    
    public getType() {
        return OP04_032_814.type
    }
    
    public getImage() {
        return OP04_032_814.image
    }
    
    public getName() {
        return OP04_032_814._name
    }
}
