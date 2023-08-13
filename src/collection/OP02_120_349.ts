
import Card from "../entities/Card";

export default class OP02_120_349 extends Card {
    public static id: string = "OP02_120_349";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] DON!! -2 : Your Leader and all your Characters gain +1000 Power until the start of your next turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-120_f596f4_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_120_349.id
    }
    
    public getType() {
        return OP02_120_349.type
    }
    
    public getImage() {
        return OP02_120_349.image
    }
    
    public getName() {
        return OP02_120_349._name
    }
}
