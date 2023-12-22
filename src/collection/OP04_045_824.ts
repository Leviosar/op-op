
import Card from "../entities/Card";

export default class OP04_045_824 extends Card {
    public static id: string = "OP04_045_824";
    
    public static _name: string = "King";

    public effect: string = "[On Play] Draw 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-045_24d8f7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP04_045_824.id
    }
    
    public getType() {
        return OP04_045_824.type
    }
    
    public getImage() {
        return OP04_045_824.image
    }
    
    public getName() {
        return OP04_045_824._name
    }
    
    public getCost(): number {
        return parseInt(OP04_045_824.cost)
    }
}
