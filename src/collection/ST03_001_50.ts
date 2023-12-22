
import Card from "../entities/Card";

export default class ST03_001_50 extends Card {
    public static id: string = "ST03_001_50";
    
    public static _name: string = "Crocodile";

    public effect: string = "[Activate Main] (Once per Turn) <Don!! -4>: Return up to one cost 5 or lower Character to its owner's hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-001_6be431_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return ST03_001_50.id
    }
    
    public getType() {
        return ST03_001_50.type
    }
    
    public getImage() {
        return ST03_001_50.image
    }
    
    public getName() {
        return ST03_001_50._name
    }
    
    public getCost(): number {
        return parseInt(ST03_001_50.cost)
    }
}
