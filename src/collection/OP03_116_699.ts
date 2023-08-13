
import Card from "../entities/Card";

export default class OP03_116_699 extends Card {
    public static id: string = "OP03_116_699";
    
    public static _name: string = "Shirahoshi";

    public effect: string = "[On Play] Draw 3 cards and trash 2 cards from your hand.\r\n[Trigger] Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-116_2aa837_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_116_699.id
    }
    
    public getType() {
        return OP03_116_699.type
    }
    
    public getImage() {
        return OP03_116_699.image
    }
    
    public getName() {
        return OP03_116_699._name
    }
}
