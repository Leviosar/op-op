
import Card from "../entities/Card";

export default class OP04_013_804 extends Card {
    public static id: string = "OP04_013_804";
    
    public static _name: string = "Pell";

    public effect: string = "[DON!! x1] [When Attacking] K.O. up to 1 of your opponent's Characters with 4000 power or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-013_955e89_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_013_804.id
    }
    
    public getType() {
        return OP04_013_804.type
    }
    
    public getImage() {
        return OP04_013_804.image
    }
    
    public getName() {
        return OP04_013_804._name
    }
}
