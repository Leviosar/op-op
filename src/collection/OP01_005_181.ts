
import Card from "../entities/Card";

export default class OP01_005_181 extends Card {
    public static id: string = "OP01_005_181";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] Return up to one Red Character other than [Uta] that costs 3 or less from your trash and to your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-005_d51122_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_005_181.id
    }
    
    public getType() {
        return OP01_005_181.type
    }
    
    public getImage() {
        return OP01_005_181.image
    }
    
    public getName() {
        return OP01_005_181._name
    }
}
