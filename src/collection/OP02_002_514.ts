
import Card from "../entities/Card";

export default class OP02_002_514 extends Card {
    public static id: string = "OP02_002_514";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[Your Turn] When you attach DON!! to this Leader or your Characters, reduce by -1 the cost of up to 1 of your opponent’s cost 7 or lower Characters during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-002_b4e773_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_002_514.id
    }
    
    public getType() {
        return OP02_002_514.type
    }
    
    public getImage() {
        return OP02_002_514.image
    }
    
    public getName() {
        return OP02_002_514._name
    }
}
