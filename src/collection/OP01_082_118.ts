
import Card from "../entities/Card";

export default class OP01_082_118 extends Card {
    public static id: string = "OP01_082_118";
    
    public static _name: string = "Monet";

    public effect: string = "[Trigger] Play this card.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-082_739bd3_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_082_118.id
    }
    
    public getType() {
        return OP01_082_118.type
    }
    
    public getImage() {
        return OP01_082_118.image
    }
    
    public getName() {
        return OP01_082_118._name
    }
    
    public getCost(): number {
        return parseInt(OP01_082_118.cost)
    }
}
