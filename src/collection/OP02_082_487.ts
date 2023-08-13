
import Card from "../entities/Card";

export default class OP02_082_487 extends Card {
    public static id: string = "OP02_082_487";
    
    public static _name: string = "Byrnndi World";

    public effect: string = "[Activate: Main] DON!! −8 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +792000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-082_790239_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_082_487.id
    }
    
    public getType() {
        return OP02_082_487.type
    }
    
    public getImage() {
        return OP02_082_487.image
    }
    
    public getName() {
        return OP02_082_487._name
    }
}
