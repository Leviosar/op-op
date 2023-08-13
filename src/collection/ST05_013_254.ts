
import Card from "../entities/Card";

export default class ST05_013_254 extends Card {
    public static id: string = "ST05_013_254";
    
    public static _name: string = "Scarlet";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST05-013_35939d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST05_013_254.id
    }
    
    public getType() {
        return ST05_013_254.type
    }
    
    public getImage() {
        return ST05_013_254.image
    }
    
    public getName() {
        return ST05_013_254._name
    }
}
