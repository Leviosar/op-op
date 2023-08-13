
import Card from "../entities/Card";

export default class OP01_009_119 extends Card {
    public static id: string = "OP01_009_119";
    
    public static _name: string = "Carrot";

    public effect: string = "[Trigger] Play this card.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-009_accee7_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_009_119.id
    }
    
    public getType() {
        return OP01_009_119.type
    }
    
    public getImage() {
        return OP01_009_119.image
    }
    
    public getName() {
        return OP01_009_119._name
    }
}
