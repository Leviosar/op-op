
import Card from "../entities/Card";

export default class OP01_052_98 extends Card {
    public static id: string = "OP01_052_98";
    
    public static _name: string = "Raizo";

    public effect: string = "[When Attacking] [Once Per Turn] If you have 2 or more rested Characters, draw 1.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-052_d70403_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_052_98.id
    }
    
    public getType() {
        return OP01_052_98.type
    }
    
    public getImage() {
        return OP01_052_98.image
    }
    
    public getName() {
        return OP01_052_98._name
    }
    
    public getCost(): number {
        return parseInt(OP01_052_98.cost)
    }
}
