
import Card from "../entities/Card";

export default class OP02_113_505 extends Card {
    public static id: string = "OP02_113_505";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn. Then, if there is a Character with a cost of 0, this Character gains +2000 power during this battle.\r\n[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-113_505a28_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_113_505.id
    }
    
    public getType() {
        return OP02_113_505.type
    }
    
    public getImage() {
        return OP02_113_505.image
    }
    
    public getName() {
        return OP02_113_505._name
    }
}
