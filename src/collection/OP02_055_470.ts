
import Card from "../entities/Card";

export default class OP02_055_470 extends Card {
    public static id: string = "OP02_055_470";
    
    public static _name: string = "Cabaji";

    public effect: string = "[On Play] If you have [Mohji], draw 2 cards and trash 1 card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-055_5fd9cc_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP02_055_470.id
    }
    
    public getType() {
        return OP02_055_470.type
    }
    
    public getImage() {
        return OP02_055_470.image
    }
    
    public getName() {
        return OP02_055_470._name
    }
    
    public getCost(): number {
        return parseInt(OP02_055_470.cost)
    }
}
