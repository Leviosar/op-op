
import Card from "../entities/Card";

export default class OP04_030_761 extends Card {
    public static id: string = "OP04_030_761";
    
    public static _name: string = "Trebol";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 5 or less.\r\n[When Opponent Attacks] (2): Set up to 1 of your opponent's Characters with a cost of 4 or less as rested.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-030_41960b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_030_761.id
    }
    
    public getType() {
        return OP04_030_761.type
    }
    
    public getImage() {
        return OP04_030_761.image
    }
    
    public getName() {
        return OP04_030_761._name
    }
}
