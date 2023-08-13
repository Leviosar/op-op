
import Card from "../entities/Card";

export default class OP02_101_498 extends Card {
    public static id: string = "OP02_101_498";
    
    public static _name: string = "Strawberry";

    public effect: string = "[When Attacking] If there is a Character with a cost of 0, your opponent cannot activate the <Blocker> of any Character with a cost of 5 or less during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-101_86d040_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_101_498.id
    }
    
    public getType() {
        return OP02_101_498.type
    }
    
    public getImage() {
        return OP02_101_498.image
    }
    
    public getName() {
        return OP02_101_498._name
    }
}
