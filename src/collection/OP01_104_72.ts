
import Card from "../entities/Card";

export default class OP01_104_72 extends Card {
    public static id: string = "OP01_104_72";
    
    public static _name: string = "Speed";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-104_b7e709_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_104_72.id
    }
    
    public getType() {
        return OP01_104_72.type
    }
    
    public getImage() {
        return OP01_104_72.image
    }
    
    public getName() {
        return OP01_104_72._name
    }
    
    public getCost(): number {
        return parseInt(OP01_104_72.cost)
    }
}
