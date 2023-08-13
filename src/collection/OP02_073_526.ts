
import Card from "../entities/Card";

export default class OP02_073_526 extends Card {
    public static id: string = "OP02_073_526";
    
    public static _name: string = "Sadi";

    public effect: string = "[On Play] Play up to 1 Character card with the {Jailer Beast} type from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-073_9e3d76_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_073_526.id
    }
    
    public getType() {
        return OP02_073_526.type
    }
    
    public getImage() {
        return OP02_073_526.image
    }
    
    public getName() {
        return OP02_073_526._name
    }
}
