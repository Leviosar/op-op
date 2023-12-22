
import Card from "../entities/Card";

export default class OP02_001_306 extends Card {
    public static id: string = "OP02_001_306";
    
    public static _name: string = "Edward Newgate";

    public effect: string = "[End of your turn] Add 1 card from the top of your Life Area to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-001_8262e1_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP02_001_306.id
    }
    
    public getType() {
        return OP02_001_306.type
    }
    
    public getImage() {
        return OP02_001_306.image
    }
    
    public getName() {
        return OP02_001_306._name
    }
    
    public getCost(): number {
        return parseInt(OP02_001_306.cost)
    }
}