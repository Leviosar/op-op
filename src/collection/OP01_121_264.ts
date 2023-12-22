
import Card from "../entities/Card";

export default class OP01_121_264 extends Card {
    public static id: string = "OP01_121_264";
    
    public static _name: string = "Yamato";

    public effect: string = "This card's name is also treated as (Kozuki Oden).\r\n<Double Attack>\r\n<Banish>";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-121_79b3f5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_121_264.id
    }
    
    public getType() {
        return OP01_121_264.type
    }
    
    public getImage() {
        return OP01_121_264.image
    }
    
    public getName() {
        return OP01_121_264._name
    }
    
    public getCost(): number {
        return parseInt(OP01_121_264.cost)
    }
}
