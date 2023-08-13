
import Card from "../entities/Card";

export default class OP01_044_71 extends Card {
    public static id: string = "OP01_044_71";
    
    public static _name: string = "Shachi";

    public effect: string = "<Blocker>\r\n[On Play] If you don't control [Penguin], play 1 [Penguin] from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-044_5fd83b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_044_71.id
    }
    
    public getType() {
        return OP01_044_71.type
    }
    
    public getImage() {
        return OP01_044_71.image
    }
    
    public getName() {
        return OP01_044_71._name
    }
}
