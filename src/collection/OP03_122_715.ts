
import Card from "../entities/Card";

export default class OP03_122_715 extends Card {
    public static id: string = "OP03_122_715";
    
    public static _name: string = "Sogeking";

    public effect: string = "This Character is also called \"Usopp\"\r\n[On Play] Return a Character that costs 6 or less to their owner's hand. Then, draw 2 cards and trash 2 cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-122_a6c3f6_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_122_715.id
    }
    
    public getType() {
        return OP03_122_715.type
    }
    
    public getImage() {
        return OP03_122_715.image
    }
    
    public getName() {
        return OP03_122_715._name
    }
}
