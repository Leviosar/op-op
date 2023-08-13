
import Card from "../entities/Card";

export default class OP04_071_841 extends Card {
    public static id: string = "OP04_071_841";
    
    public static _name: string = "Mr. 4 (Babe)";

    public effect: string = "[On Your Opponent's Attack] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains [Blocker] and +1000 power during this battle.\r\n(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-071_50f242_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_071_841.id
    }
    
    public getType() {
        return OP04_071_841.type
    }
    
    public getImage() {
        return OP04_071_841.image
    }
    
    public getName() {
        return OP04_071_841._name
    }
}
