
import Card from "../entities/Card";

export default class OP04_094_858 extends Card {
    public static id: string = "OP04_094_858";
    
    public static _name: string = "Trueno Bastardo";

    public effect: string = "[Main] Choose up to 1 of your opponent's Characters with a cost of 4 or less and K.O. it. If you have 15 or more cards in your trash, choose up to 1 of your opponent's Characters with a cost of 6 or less instead of a Character with a cost of 4 or less.\r\n[Trigger] You may rest your Leader: K.O. up to 1 of your opponent's Characters with a cost of 5 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-094_282bb1_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP04_094_858.id
    }
    
    public getType() {
        return OP04_094_858.type
    }
    
    public getImage() {
        return OP04_094_858.image
    }
    
    public getName() {
        return OP04_094_858._name
    }
}
