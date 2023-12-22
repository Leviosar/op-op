
import Card from "../entities/Card";

export default class OP01_112_213 extends Card {
    public static id: string = "OP01_112_213";
    
    public static _name: string = "Page One";

    public effect: string = "[Activate: Main] [Once Per Turn] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character can also attack your opponent's active Characters during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-112_1effcf_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_112_213.id
    }
    
    public getType() {
        return OP01_112_213.type
    }
    
    public getImage() {
        return OP01_112_213.image
    }
    
    public getName() {
        return OP01_112_213._name
    }
    
    public getCost(): number {
        return parseInt(OP01_112_213.cost)
    }
}
