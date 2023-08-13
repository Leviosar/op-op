
import Card from "../entities/Card";

export default class ST05_012_253 extends Card {
    public static id: string = "ST05_012_253";
    
    public static _name: string = "Scarlet";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST05-012_0d05bb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST05_012_253.id
    }
    
    public getType() {
        return ST05_012_253.type
    }
    
    public getImage() {
        return ST05_012_253.image
    }
    
    public getName() {
        return ST05_012_253._name
    }
}
