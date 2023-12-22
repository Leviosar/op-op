
import Card from "../entities/Card";

export default class OP02_086_527 extends Card {
    public static id: string = "OP02_086_527";
    
    public static _name: string = "Minokoala";

    public effect: string = "<Blocker>\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.\r\n";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-086_0a7582_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP02_086_527.id
    }
    
    public getType() {
        return OP02_086_527.type
    }
    
    public getImage() {
        return OP02_086_527.image
    }
    
    public getName() {
        return OP02_086_527._name
    }
    
    public getCost(): number {
        return parseInt(OP02_086_527.cost)
    }
}
