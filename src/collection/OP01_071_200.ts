
import Card from "../entities/Card";

export default class OP01_071_200 extends Card {
    public static id: string = "OP01_071_200";
    
    public static _name: string = "Jinbe";

    public effect: string = "[On Play] Place 1 Character with a cost of 3 or less at the bottom of the owner's deck.\r\n[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-071_c340d2_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_071_200.id
    }
    
    public getType() {
        return OP01_071_200.type
    }
    
    public getImage() {
        return OP01_071_200.image
    }
    
    public getName() {
        return OP01_071_200._name
    }
}
