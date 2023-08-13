
import Card from "../entities/Card";

export default class OP02_063_474 extends Card {
    public static id: string = "OP02_063_474";
    
    public static _name: string = "Mr.1(Daz.Bonez)";

    public effect: string = "[On Play] Add up to 1 blue Event card with a cost of 1 from your trash to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-063_50f50f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_063_474.id
    }
    
    public getType() {
        return OP02_063_474.type
    }
    
    public getImage() {
        return OP02_063_474.image
    }
    
    public getName() {
        return OP02_063_474._name
    }
}
