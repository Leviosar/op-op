
import Card from "../entities/Card";

export default class ST03_016_97 extends Card {
    public static id: string = "ST03_016_97";
    
    public static _name: string = "Thrust Pad Cannon";

    public effect: string = "[Counter] Return a Character with a cost of 3 or less to its owner's hand. \r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-016_78085a_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST03_016_97.id
    }
    
    public getType() {
        return ST03_016_97.type
    }
    
    public getImage() {
        return ST03_016_97.image
    }
    
    public getName() {
        return ST03_016_97._name
    }
}
