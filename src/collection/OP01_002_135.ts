
import Card from "../entities/Card";

export default class OP01_002_135 extends Card {
    public static id: string = "OP01_002_135";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Activate Main][Once per turn] (2) (You may rest the specified number of DON!! cards in your Cost Area): If you control 5 Characters, return 1 of your Characters to the owners hand, then play 1 cost 5 or lower Character of a different color as the returned Character from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-002_79b455_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP01_002_135.id
    }
    
    public getType() {
        return OP01_002_135.type
    }
    
    public getImage() {
        return OP01_002_135.image
    }
    
    public getName() {
        return OP01_002_135._name
    }
    
    public getCost(): number {
        return parseInt(OP01_002_135.cost)
    }
}
