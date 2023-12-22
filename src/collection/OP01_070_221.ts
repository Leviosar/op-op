
import Card from "../entities/Card";

export default class OP01_070_221 extends Card {
    public static id: string = "OP01_070_221";
    
    public static _name: string = "Dracule Mihawk";

    public effect: string = "[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-070_7212ff_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "9";
    
    public getId() {
        return OP01_070_221.id
    }
    
    public getType() {
        return OP01_070_221.type
    }
    
    public getImage() {
        return OP01_070_221.image
    }
    
    public getName() {
        return OP01_070_221._name
    }
    
    public getCost(): number {
        return parseInt(OP01_070_221.cost)
    }
}
