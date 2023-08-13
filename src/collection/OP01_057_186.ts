
import Card from "../entities/Card";

export default class OP01_057_186 extends Card {
    public static id: string = "OP01_057_186";
    
    public static _name: string = "Paradise Waterfall";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +2000 power during this battle. Then, set 1 of your Characters as active.\r\n[Trigger] K.O. 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-057_338da4_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_057_186.id
    }
    
    public getType() {
        return OP01_057_186.type
    }
    
    public getImage() {
        return OP01_057_186.image
    }
    
    public getName() {
        return OP01_057_186._name
    }
}
