
import Card from "../entities/Card";

export default class OP01_033_286 extends Card {
    public static id: string = "OP01_033_286";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Rest 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-033_72a68d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_033_286.id
    }
    
    public getType() {
        return OP01_033_286.type
    }
    
    public getImage() {
        return OP01_033_286.image
    }
    
    public getName() {
        return OP01_033_286._name
    }
}
