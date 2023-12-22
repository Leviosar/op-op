
import Card from "../entities/Card";

export default class OP01_096_156 extends Card {
    public static id: string = "OP01_096_156";
    
    public static _name: string = "King";

    public effect: string = "[On Play] DON!! -2:  K.O. 1 of your opponent's cost 3 or lower Characters and 1 of your opponent's cost 2 or lower Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-096_430605_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP01_096_156.id
    }
    
    public getType() {
        return OP01_096_156.type
    }
    
    public getImage() {
        return OP01_096_156.image
    }
    
    public getName() {
        return OP01_096_156._name
    }
    
    public getCost(): number {
        return parseInt(OP01_096_156.cost)
    }
}
