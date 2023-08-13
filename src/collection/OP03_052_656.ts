
import Card from "../entities/Card";

export default class OP03_052_656 extends Card {
    public static id: string = "OP03_052_656";
    
    public static _name: string = "Bell-Mère";

    public effect: string = "[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.\r\n[On K.O] You may trash 3 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-052_d44b92_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_052_656.id
    }
    
    public getType() {
        return OP03_052_656.type
    }
    
    public getImage() {
        return OP03_052_656.image
    }
    
    public getName() {
        return OP03_052_656._name
    }
}
