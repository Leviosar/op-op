
import Card from "../entities/Card";

export default class OP01_121_146 extends Card {
    public static id: string = "OP01_121_146";
    
    public static _name: string = "Yamato";

    public effect: string = "This card's name is also treated as (Kozuki Oden).\r\n<Double Attack>\r\n<Banish>";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-121_fe334b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_121_146.id
    }
    
    public getType() {
        return OP01_121_146.type
    }
    
    public getImage() {
        return OP01_121_146.image
    }
    
    public getName() {
        return OP01_121_146._name
    }
}
