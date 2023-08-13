
import Card from "../entities/Card";

export default class OP03_040_558 extends Card {
    public static id: string = "OP03_040_558";
    
    public static _name: string = "Nami";

    public effect: string = "As an additional rule, when your deck reaches 0 cards, you win the match instead of losing it.\r\n\r\n[DON!!x1] When your opponent takes damage to their Life through the attack of this Leader, you may trash 1 card from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-040_09ba80_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP03_040_558.id
    }
    
    public getType() {
        return OP03_040_558.type
    }
    
    public getImage() {
        return OP03_040_558.image
    }
    
    public getName() {
        return OP03_040_558._name
    }
}
