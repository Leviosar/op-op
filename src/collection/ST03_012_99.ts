
import Card from "../entities/Card";

export default class ST03_012_99 extends Card {
    public static id: string = "ST03_012_99";
    
    public static _name: string = "Thrust Pad Cannon";

    public effect: string = "[Counter] Return a Character with a cost of 3 or less to its owner's hand. \r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-012_c5aa66_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST03_012_99.id
    }
    
    public getType() {
        return ST03_012_99.type
    }
    
    public getImage() {
        return ST03_012_99.image
    }
    
    public getName() {
        return ST03_012_99._name
    }
    
    public getCost(): number {
        return parseInt(ST03_012_99.cost)
    }
}
