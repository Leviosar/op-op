
import Card from "../entities/Card";

export default class OP02_072_524 extends Card {
    public static id: string = "OP02_072_524";
    
    public static _name: string = "Z";

    public effect: string = "[When Attacking] DON!!-4: K.O. one of your opponent's Characters that costs 3 or less. Then, give this leader +1000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-072_9f58c3_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_072_524.id
    }
    
    public getType() {
        return OP02_072_524.type
    }
    
    public getImage() {
        return OP02_072_524.image
    }
    
    public getName() {
        return OP02_072_524._name
    }
}
