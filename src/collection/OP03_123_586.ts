
import Card from "../entities/Card";

export default class OP03_123_586 extends Card {
    public static id: string = "OP03_123_586";
    
    public static _name: string = "Charlotte Katakuri";

    public effect: string = "[On Play] Put up to 1 Character that costs 8 or less on the top or bottom of its owner's Life Area face-up.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-123_698ba5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "8";
    
    public getId() {
        return OP03_123_586.id
    }
    
    public getType() {
        return OP03_123_586.type
    }
    
    public getImage() {
        return OP03_123_586.image
    }
    
    public getName() {
        return OP03_123_586._name
    }
    
    public getCost(): number {
        return parseInt(OP03_123_586.cost)
    }
}
