
import Card from "../entities/Card";

export default class OP02_003_440 extends Card {
    public static id: string = "OP02_003_440";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and return them to the top or bottom of the deck in any order.\r\n[DON!! x1] [When Attacking] Trash 1 card from your hand: Place up to 1 of your opponent's cost 1 or lower Characters to the bottom of the deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-003_d15176_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP02_003_440.id
    }
    
    public getType() {
        return OP02_003_440.type
    }
    
    public getImage() {
        return OP02_003_440.image
    }
    
    public getName() {
        return OP02_003_440._name
    }
    
    public getCost(): number {
        return parseInt(OP02_003_440.cost)
    }
}
