
import Card from "../entities/Card";

export default class OP02_044_464 extends Card {
    public static id: string = "OP02_044_464";
    
    public static _name: string = "Wanda";

    public effect: string = "[On Play] Play up to 1 {Minks} type Character card other than [Wanda] with a cost of 3 or less from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-044_f6caa2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_044_464.id
    }
    
    public getType() {
        return OP02_044_464.type
    }
    
    public getImage() {
        return OP02_044_464.image
    }
    
    public getName() {
        return OP02_044_464._name
    }
    
    public getCost(): number {
        return parseInt(OP02_044_464.cost)
    }
}
