
import Card from "../entities/Card";

export default class OP02_017_511 extends Card {
    public static id: string = "OP02_017_511";
    
    public static _name: string = "Masked Deuce";

    public effect: string = "[DON!! x2] [When Attacking] K.O. up to 1 of your opponent's Characters with 2000 power or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-017_639fe0_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_017_511.id
    }
    
    public getType() {
        return OP02_017_511.type
    }
    
    public getImage() {
        return OP02_017_511.image
    }
    
    public getName() {
        return OP02_017_511._name
    }
    
    public getCost(): number {
        return parseInt(OP02_017_511.cost)
    }
}
