
import Card from "../entities/Card";

export default class OP04_021_809 extends Card {
    public static id: string = "OP04_021_809";
    
    public static _name: string = "Viola";

    public effect: string = "[On Your Opponent's Attack] ➁ (You may rest the specified number of DON!! cards in your cost area.): Rest up to 1 of your opponent's DON!! cards.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-021_398c99_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_021_809.id
    }
    
    public getType() {
        return OP04_021_809.type
    }
    
    public getImage() {
        return OP04_021_809.image
    }
    
    public getName() {
        return OP04_021_809._name
    }
}
