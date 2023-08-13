
import Card from "../entities/Card";

export default class OP03_009_625 extends Card {
    public static id: string = "OP03_009_625";
    
    public static _name: string = "Haruta";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-009_f1587e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_009_625.id
    }
    
    public getType() {
        return OP03_009_625.type
    }
    
    public getImage() {
        return OP03_009_625.image
    }
    
    public getName() {
        return OP03_009_625._name
    }
}
