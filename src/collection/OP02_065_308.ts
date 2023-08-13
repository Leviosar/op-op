
import Card from "../entities/Card";

export default class OP02_065_308 extends Card {
    public static id: string = "OP02_065_308";
    
    public static _name: string = "Mr. 3 (Galdino)";

    public effect: string = "<Blocker>\r\n[End of Your Turn] You may trash 1 card from your hand: Put this Character to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-065_2233b8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_065_308.id
    }
    
    public getType() {
        return OP02_065_308.type
    }
    
    public getImage() {
        return OP02_065_308.image
    }
    
    public getName() {
        return OP02_065_308._name
    }
}
