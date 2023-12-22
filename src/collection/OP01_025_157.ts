
import Card from "../entities/Card";

export default class OP01_025_157 extends Card {
    public static id: string = "OP01_025_157";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains<Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-025_186499_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_025_157.id
    }
    
    public getType() {
        return OP01_025_157.type
    }
    
    public getImage() {
        return OP01_025_157.image
    }
    
    public getName() {
        return OP01_025_157._name
    }
    
    public getCost(): number {
        return parseInt(OP01_025_157.cost)
    }
}
