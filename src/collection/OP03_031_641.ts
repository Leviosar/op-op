
import Card from "../entities/Card";

export default class OP03_031_641 extends Card {
    public static id: string = "OP03_031_641";
    
    public static _name: string = "Pearl";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-031_712412_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_031_641.id
    }
    
    public getType() {
        return OP03_031_641.type
    }
    
    public getImage() {
        return OP03_031_641.image
    }
    
    public getName() {
        return OP03_031_641._name
    }
}
