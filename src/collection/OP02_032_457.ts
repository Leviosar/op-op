
import Card from "../entities/Card";

export default class OP02_032_457 extends Card {
    public static id: string = "OP02_032_457";
    
    public static _name: string = "Shishilian";

    public effect: string = "[On Play] (2) (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Minks} type Characters with a cost of 5 or less as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-032_75ddae_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_032_457.id
    }
    
    public getType() {
        return OP02_032_457.type
    }
    
    public getImage() {
        return OP02_032_457.image
    }
    
    public getName() {
        return OP02_032_457._name
    }
}
