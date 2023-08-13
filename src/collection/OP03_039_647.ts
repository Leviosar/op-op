
import Card from "../entities/Card";

export default class OP03_039_647 extends Card {
    public static id: string = "OP03_039_647";
    
    public static _name: string = "One Two Django";

    public effect: string = "[Main] Rest up to 1 of your opponent's Characters with a cost of 1 or less. Then, up to 1 of your Characters gains +1000 Power during this turn.\r\n\r\n[Trigger] Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-039_9f663e_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_039_647.id
    }
    
    public getType() {
        return OP03_039_647.type
    }
    
    public getImage() {
        return OP03_039_647.image
    }
    
    public getName() {
        return OP03_039_647._name
    }
}
