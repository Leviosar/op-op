
import Card from "../entities/Card";

export default class OP03_014_630 extends Card {
    public static id: string = "OP03_014_630";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[When Attacking] Play up to 1 Red Character card with a cost of 1 from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-014_31c749_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_014_630.id
    }
    
    public getType() {
        return OP03_014_630.type
    }
    
    public getImage() {
        return OP03_014_630.image
    }
    
    public getName() {
        return OP03_014_630._name
    }
}
