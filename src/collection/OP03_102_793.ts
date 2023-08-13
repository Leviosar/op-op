
import Card from "../entities/Card";

export default class OP03_102_793 extends Card {
    public static id: string = "OP03_102_793";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x2] [When Attacking] You may add the top or bottom card of your Life area to your hand: Add up to 1 card from the top of your deck to the top of your Life area. ";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-102_24d8a1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_102_793.id
    }
    
    public getType() {
        return OP03_102_793.type
    }
    
    public getImage() {
        return OP03_102_793.image
    }
    
    public getName() {
        return OP03_102_793._name
    }
}
