
import Card from "../entities/Card";

export default class OP03_108_694 extends Card {
    public static id: string = "OP03_108_694";
    
    public static _name: string = "Charlotte Cracker";

    public effect: string = "[DON!! x1] While you have less Life than your opponent, this character gains <Double Attack> and +1000 power. (This card deals 2 damage.)\r\n[Trigger] You may discard 1 card from your hand: Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-108_795ada_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_108_694.id
    }
    
    public getType() {
        return OP03_108_694.type
    }
    
    public getImage() {
        return OP03_108_694.image
    }
    
    public getName() {
        return OP03_108_694._name
    }
}
