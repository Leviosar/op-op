
import Card from "../entities/Card";

export default class OP01_032_100 extends Card {
    public static id: string = "OP01_032_100";
    
    public static _name: string = "Ashura Douji";

    public effect: string = "[DON!!x1] If your opponent has 2 or more rested Characters, this Character gets +2000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-032_f37fb3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_032_100.id
    }
    
    public getType() {
        return OP01_032_100.type
    }
    
    public getImage() {
        return OP01_032_100.image
    }
    
    public getName() {
        return OP01_032_100._name
    }
}
