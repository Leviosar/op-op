
import Card from "../entities/Card";

export default class OP02_106_502 extends Card {
    public static id: string = "OP02_106_502";
    
    public static _name: string = "Tsuru";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters −2 cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-106_baf919_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_106_502.id
    }
    
    public getType() {
        return OP02_106_502.type
    }
    
    public getImage() {
        return OP02_106_502.image
    }
    
    public getName() {
        return OP02_106_502._name
    }
    
    public getCost(): number {
        return parseInt(OP02_106_502.cost)
    }
}
