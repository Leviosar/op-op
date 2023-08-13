
import Card from "../entities/Card";

export default class OP02_009_324 extends Card {
    public static id: string = "OP02_009_324";
    
    public static _name: string = "Squard";

    public effect: string = "[On Play] If your Leader has [Whitebeard Pirates] in its types, give up to 1 of your opponent's Characters -4000 Power for the turn, add the top card from your Life area to your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-009_5a704a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_009_324.id
    }
    
    public getType() {
        return OP02_009_324.type
    }
    
    public getImage() {
        return OP02_009_324.image
    }
    
    public getName() {
        return OP02_009_324._name
    }
}
