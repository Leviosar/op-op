
import Card from "../entities/Card";

export default class OP02_001_358 extends Card {
    public static id: string = "OP02_001_358";
    
    public static _name: string = "Edward Newgate";

    public effect: string = "[End of your turn] Add 1 card from the top of your Life Area to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-001_7022a7_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_001_358.id
    }
    
    public getType() {
        return OP02_001_358.type
    }
    
    public getImage() {
        return OP02_001_358.image
    }
    
    public getName() {
        return OP02_001_358._name
    }
}
