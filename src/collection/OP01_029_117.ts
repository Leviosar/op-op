
import Card from "../entities/Card";

export default class OP01_029_117 extends Card {
    public static id: string = "OP01_029_117";
    
    public static _name: string = "Radical Beam!!";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gain +2000 power during this battle. Then, if you have 2 or less Life cards, that card gains an additional +2000 power during this battle.\r\n[Trigger] Your Leader or 1 of your Characters gain +1000 power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-029_6ba3e8_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_029_117.id
    }
    
    public getType() {
        return OP01_029_117.type
    }
    
    public getImage() {
        return OP01_029_117.image
    }
    
    public getName() {
        return OP01_029_117._name
    }
}
