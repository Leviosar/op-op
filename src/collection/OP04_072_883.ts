
import Card from "../entities/Card";

export default class OP04_072_883 extends Card {
    public static id: string = "OP04_072_883";
    
    public static _name: string = "Mr. 5 (Gem)";

    public effect: string = "[On Your Opponent's Attack] [Once Per Turn] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.) You may rest this Character: K.O. up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-072_51f16b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_072_883.id
    }
    
    public getType() {
        return OP04_072_883.type
    }
    
    public getImage() {
        return OP04_072_883.image
    }
    
    public getName() {
        return OP04_072_883._name
    }
}
