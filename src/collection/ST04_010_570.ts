
import Card from "../entities/Card";

export default class ST04_010_570 extends Card {
    public static id: string = "ST04_010_570";
    
    public static _name: string = "Who's who";

    public effect: string = "[On Play] [Don!! -1] K.O. up to one of your opponent's cost 3 or lower Characters.\r\n\r\n[Trigger] You may play this card.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-010_761c9b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST04_010_570.id
    }
    
    public getType() {
        return ST04_010_570.type
    }
    
    public getImage() {
        return ST04_010_570.image
    }
    
    public getName() {
        return ST04_010_570._name
    }
}
