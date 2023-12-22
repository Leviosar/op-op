
import Card from "../entities/Card";

export default class OP02_114_331 extends Card {
    public static id: string = "OP02_114_331";
    
    public static _name: string = "Borsalino";

    public effect: string = "[Opponent's turn] This Character can't be K.O.ed by effects and it gains +1000 Power.\r\n<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-114_1d07e9_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP02_114_331.id
    }
    
    public getType() {
        return OP02_114_331.type
    }
    
    public getImage() {
        return OP02_114_331.image
    }
    
    public getName() {
        return OP02_114_331._name
    }
    
    public getCost(): number {
        return parseInt(OP02_114_331.cost)
    }
}
