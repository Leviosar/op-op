
import Card from "../entities/Card";

export default class OP02_034_459 extends Card {
    public static id: string = "OP02_034_459";
    
    public static _name: string = "Tony Tony.Chopper";

    public effect: string = "[DON!! x1] [When Attacking] Rest up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-034_969e81_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_034_459.id
    }
    
    public getType() {
        return OP02_034_459.type
    }
    
    public getImage() {
        return OP02_034_459.image
    }
    
    public getName() {
        return OP02_034_459._name
    }
}
