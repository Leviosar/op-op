
import Card from "../entities/Card";

export default class OP04_102_864 extends Card {
    public static id: string = "OP04_102_864";
    
    public static _name: string = "Kin'emon";

    public effect: string = "[Activate: Main] [Once Per Turn] ➀ (You may rest the specified number of DON!! cards in your cost area.) You may add 1 card from the top or bottom of your Life cards to your hand: Set this Character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-102_e52100_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP04_102_864.id
    }
    
    public getType() {
        return OP04_102_864.type
    }
    
    public getImage() {
        return OP04_102_864.image
    }
    
    public getName() {
        return OP04_102_864._name
    }
    
    public getCost(): number {
        return parseInt(OP04_102_864.cost)
    }
}
