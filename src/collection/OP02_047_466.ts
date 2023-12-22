
import Card from "../entities/Card";

export default class OP02_047_466 extends Card {
    public static id: string = "OP02_047_466";
    
    public static _name: string = "Paradise Totsuka";

    public effect: string = "[Main] Rest up to 1 of your opponent's Characters with a cost of 4 or less.\r\n[Trigger] K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-047_d60978_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_047_466.id
    }
    
    public getType() {
        return OP02_047_466.type
    }
    
    public getImage() {
        return OP02_047_466.image
    }
    
    public getName() {
        return OP02_047_466._name
    }
    
    public getCost(): number {
        return parseInt(OP02_047_466.cost)
    }
}
