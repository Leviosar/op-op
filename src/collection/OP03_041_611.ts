
import Card from "../entities/Card";

export default class OP03_041_611 extends Card {
    public static id: string = "OP03_041_611";
    
    public static _name: string = "Usopp";

    public effect: string = "<Rush>\r\n[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-041_940e44_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_041_611.id
    }
    
    public getType() {
        return OP03_041_611.type
    }
    
    public getImage() {
        return OP03_041_611.image
    }
    
    public getName() {
        return OP03_041_611._name
    }
}
