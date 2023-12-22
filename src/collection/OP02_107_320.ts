
import Card from "../entities/Card";

export default class OP02_107_320 extends Card {
    public static id: string = "OP02_107_320";
    
    public static _name: string = "Sadi";

    public effect: string = "[On Play] Play up to 1 Character card with the {Jailer Beast} type from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-107_f0e325_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_107_320.id
    }
    
    public getType() {
        return OP02_107_320.type
    }
    
    public getImage() {
        return OP02_107_320.image
    }
    
    public getName() {
        return OP02_107_320._name
    }
    
    public getCost(): number {
        return parseInt(OP02_107_320.cost)
    }
}
