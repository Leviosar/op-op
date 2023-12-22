
import Card from "../entities/Card";

export default class OP03_042_686 extends Card {
    public static id: string = "OP03_042_686";
    
    public static _name: string = "Usopp Pirates";

    public effect: string = "[On Play] Add up to 1 Blue [Usopp] from your Trash to your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-042_276f70_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_042_686.id
    }
    
    public getType() {
        return OP03_042_686.type
    }
    
    public getImage() {
        return OP03_042_686.image
    }
    
    public getName() {
        return OP03_042_686._name
    }
    
    public getCost(): number {
        return parseInt(OP03_042_686.cost)
    }
}
