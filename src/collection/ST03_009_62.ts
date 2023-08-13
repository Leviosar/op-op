
import Card from "../entities/Card";

export default class ST03_009_62 extends Card {
    public static id: string = "ST03_009_62";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] Return a cost 7 or lower Character to its owners hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-009_226b6c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_009_62.id
    }
    
    public getType() {
        return ST03_009_62.type
    }
    
    public getImage() {
        return ST03_009_62.image
    }
    
    public getName() {
        return ST03_009_62._name
    }
}
