
import Card from "../entities/Card";

export default class OP02_078_483 extends Card {
    public static id: string = "OP02_078_483";
    
    public static _name: string = "Daifugo";

    public effect: string = "[On Play] DON!! −2 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play up to 1 {SMILE} type Character card other than [Daifugo] with a cost of 3 or less from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-078_eeb7a8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_078_483.id
    }
    
    public getType() {
        return OP02_078_483.type
    }
    
    public getImage() {
        return OP02_078_483.image
    }
    
    public getName() {
        return OP02_078_483._name
    }
    
    public getCost(): number {
        return parseInt(OP02_078_483.cost)
    }
}
