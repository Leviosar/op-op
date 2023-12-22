
import Card from "../entities/Card";

export default class OP02_100_350 extends Card {
    public static id: string = "OP02_100_350";
    
    public static _name: string = "Django";

    public effect: string = "If you have a [Fullbody] in play, this Character cannot be K.O.'d by battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-100_3cc275_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_100_350.id
    }
    
    public getType() {
        return OP02_100_350.type
    }
    
    public getImage() {
        return OP02_100_350.image
    }
    
    public getName() {
        return OP02_100_350._name
    }
    
    public getCost(): number {
        return parseInt(OP02_100_350.cost)
    }
}
