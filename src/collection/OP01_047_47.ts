
import Card from "../entities/Card";

export default class OP01_047_47 extends Card {
    public static id: string = "OP01_047_47";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "<Blocker>\r\n[On Play] You may return one of your Characters to your hand: Play 1 Cost 3 or lower Character Card from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-047_616aca_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_047_47.id
    }
    
    public getType() {
        return OP01_047_47.type
    }
    
    public getImage() {
        return OP01_047_47.image
    }
    
    public getName() {
        return OP01_047_47._name
    }
    
    public getCost(): number {
        return parseInt(OP01_047_47.cost)
    }
}
