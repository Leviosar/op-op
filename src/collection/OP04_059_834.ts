
import Card from "../entities/Card";

export default class OP04_059_834 extends Card {
    public static id: string = "OP04_059_834";
    
    public static _name: string = "Iceburg";

    public effect: string = "[On Your Opponent's Attack] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): If your Leader has the {Water Seven} type, this Character gains [Blocker] during this turn.\r\n(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-059_83780c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_059_834.id
    }
    
    public getType() {
        return OP04_059_834.type
    }
    
    public getImage() {
        return OP04_059_834.image
    }
    
    public getName() {
        return OP04_059_834._name
    }
}
