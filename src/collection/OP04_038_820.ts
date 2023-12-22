
import Card from "../entities/Card";

export default class OP04_038_820 extends Card {
    public static id: string = "OP04_038_820";
    
    public static _name: string = "The Weak Do Not Have the Right to Choose How They Die!!!";

    public effect: string = "[Main]/[Counter] Rest up to 1 of your opponent's Leader or Characters. Then, K.O. up to 1 of your opponent's rested Characters with a cost of 6 or less.\r\n[Trigger] Set up to 5 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-038_9161d1_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "5";
    
    public getId() {
        return OP04_038_820.id
    }
    
    public getType() {
        return OP04_038_820.type
    }
    
    public getImage() {
        return OP04_038_820.image
    }
    
    public getName() {
        return OP04_038_820._name
    }
    
    public getCost(): number {
        return parseInt(OP04_038_820.cost)
    }
}
