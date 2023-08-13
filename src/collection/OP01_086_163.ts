
import Card from "../entities/Card";

export default class OP01_086_163 extends Card {
    public static id: string = "OP01_086_163";
    
    public static _name: string = "Overheat";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +4000 Power during this battle. Then, return 1 active Character with a cost 3 or less to the owner's hand.\r\n[Trigger] Return 1 Character with a cost of 4 or less the owner's hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-086_327d3a_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_086_163.id
    }
    
    public getType() {
        return OP01_086_163.type
    }
    
    public getImage() {
        return OP01_086_163.image
    }
    
    public getName() {
        return OP01_086_163._name
    }
}
