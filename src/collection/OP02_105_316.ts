
import Card from "../entities/Card";

export default class OP02_105_316 extends Card {
    public static id: string = "OP02_105_316";
    
    public static _name: string = "Tashigi";

    public effect: string = "[DON!! ×1] [When Attacking] Give up to 1 of your opponent's Characters -3 to their cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-105_2a0401_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_105_316.id
    }
    
    public getType() {
        return OP02_105_316.type
    }
    
    public getImage() {
        return OP02_105_316.image
    }
    
    public getName() {
        return OP02_105_316._name
    }
    
    public getCost(): number {
        return parseInt(OP02_105_316.cost)
    }
}
