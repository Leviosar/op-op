
import Card from "../entities/Card";

export default class OP03_101_688 extends Card {
    public static id: string = "OP03_101_688";
    
    public static _name: string = "King Baum";

    public effect: string = "[Trigger] You may trash the top or bottom card of your Life: Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-101_0c09a3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_101_688.id
    }
    
    public getType() {
        return OP03_101_688.type
    }
    
    public getImage() {
        return OP03_101_688.image
    }
    
    public getName() {
        return OP03_101_688._name
    }
}
