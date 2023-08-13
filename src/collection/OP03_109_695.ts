
import Card from "../entities/Card";

export default class OP03_109_695 extends Card {
    public static id: string = "OP03_109_695";
    
    public static _name: string = "Charlotte Chiffon";

    public effect: string = "[On Play] You may trash the top or bottom card of your Life: Place up to 1 card from the top of your deck at the top of your Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-109_04a615_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_109_695.id
    }
    
    public getType() {
        return OP03_109_695.type
    }
    
    public getImage() {
        return OP03_109_695.image
    }
    
    public getName() {
        return OP03_109_695._name
    }
}
