
import Card from "../entities/Card";

export default class OP01_065_162 extends Card {
    public static id: string = "OP01_065_162";
    
    public static _name: string = "Smiley";

    public effect: string = "[DON!!x1] [Your Turn] For each card in your hand, +1000 power for this character.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-065_f76326_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_065_162.id
    }
    
    public getType() {
        return OP01_065_162.type
    }
    
    public getImage() {
        return OP01_065_162.image
    }
    
    public getName() {
        return OP01_065_162._name
    }
    
    public getCost(): number {
        return parseInt(OP01_065_162.cost)
    }
}