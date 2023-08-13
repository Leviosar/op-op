
import Card from "../entities/Card";

export default class ST03_015_88 extends Card {
    public static id: string = "ST03_015_88";
    
    public static _name: string = "Sables";

    public effect: string = "[Main] Return 1 of your opponent's Characters with a cost of 7 or less to its owner's hand. \r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-015_cb73fb_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST03_015_88.id
    }
    
    public getType() {
        return ST03_015_88.type
    }
    
    public getImage() {
        return ST03_015_88.image
    }
    
    public getName() {
        return ST03_015_88._name
    }
}
