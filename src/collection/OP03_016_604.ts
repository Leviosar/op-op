
import Card from "../entities/Card";

export default class OP03_016_604 extends Card {
    public static id: string = "OP03_016_604";
    
    public static _name: string = "Flame Emperor";

    public effect: string = "[Main] If your Leader is [Portgas D. Ace], K.O. up to 1 of your opponent's Characters with 8000 power or less, your Leader gains <Double Attack> and +3000 power during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with 6000 Power or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-018_9b902d_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_016_604.id
    }
    
    public getType() {
        return OP03_016_604.type
    }
    
    public getImage() {
        return OP03_016_604.image
    }
    
    public getName() {
        return OP03_016_604._name
    }
}
