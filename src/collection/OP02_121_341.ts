
import Card from "../entities/Card";

export default class OP02_121_341 extends Card {
    public static id: string = "OP02_121_341";
    
    public static _name: string = "Kuzan";

    public effect: string = "[Your Turn] All of your opponent's Characters get -5 to their cost.\r\n[On Play] K.O. up to 1 of your opponent's Characters with a cost of 0.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-121_24b50a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_121_341.id
    }
    
    public getType() {
        return OP02_121_341.type
    }
    
    public getImage() {
        return OP02_121_341.image
    }
    
    public getName() {
        return OP02_121_341._name
    }
}
