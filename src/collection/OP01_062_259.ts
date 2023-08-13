
import Card from "../entities/Card";

export default class OP01_062_259 extends Card {
    public static id: string = "OP01_062_259";
    
    public static _name: string = "Crocodile";

    public effect: string = "[DON!! x1] After you activate an Event, you may draw 1 card if you have 4 or less cards in your hand and haven't drawn a card using this Leader's effect during this turn";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-062_47d06a_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP01_062_259.id
    }
    
    public getType() {
        return OP01_062_259.type
    }
    
    public getImage() {
        return OP01_062_259.image
    }
    
    public getName() {
        return OP01_062_259._name
    }
}
