
import Card from "../entities/Card";

export default class OP04_078_847 extends Card {
    public static id: string = "OP04_078_847";
    
    public static _name: string = "Weakness... Is an Unforgivable Sin.";

    public effect: string = "[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader or Character cards gains +1000 power during this turn.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-078_53ff4f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_078_847.id
    }
    
    public getType() {
        return OP04_078_847.type
    }
    
    public getImage() {
        return OP04_078_847.image
    }
    
    public getName() {
        return OP04_078_847._name
    }
}
