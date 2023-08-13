
import Card from "../entities/Card";

export default class OP01_093_147 extends Card {
    public static id: string = "OP01_093_147";
    
    public static _name: string = "Ulti";

    public effect: string = "[On Play] (1) (You may rest the specified number of DON!! cards in your Cost Area): Add 1 card from your DON!! deck and rest it.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-093_499034_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_093_147.id
    }
    
    public getType() {
        return OP01_093_147.type
    }
    
    public getImage() {
        return OP01_093_147.image
    }
    
    public getName() {
        return OP01_093_147._name
    }
}
