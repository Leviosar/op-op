
import Card from "../entities/Card";

export default class ST03_010_106 extends Card {
    public static id: string = "ST03_010_106";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-010_66138d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_010_106.id
    }
    
    public getType() {
        return ST03_010_106.type
    }
    
    public getImage() {
        return ST03_010_106.image
    }
    
    public getName() {
        return ST03_010_106._name
    }
}
