
import Card from "../entities/Card";

export default class OP01_114_191 extends Card {
    public static id: string = "OP01_114_191";
    
    public static _name: string = "X Drake";

    public effect: string = "[On Play] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-114_6a8f91_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_114_191.id
    }
    
    public getType() {
        return OP01_114_191.type
    }
    
    public getImage() {
        return OP01_114_191.image
    }
    
    public getName() {
        return OP01_114_191._name
    }
    
    public getCost(): number {
        return parseInt(OP01_114_191.cost)
    }
}