
import Card from "../entities/Card";

export default class OP01_005_718 extends Card {
    public static id: string = "OP01_005_718";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] Return up to one Red Character other than [Uta] that costs 3 or less from your trash and to your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-005_a5e4e0_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_005_718.id
    }
    
    public getType() {
        return OP01_005_718.type
    }
    
    public getImage() {
        return OP01_005_718.image
    }
    
    public getName() {
        return OP01_005_718._name
    }
    
    public getCost(): number {
        return parseInt(OP01_005_718.cost)
    }
}
