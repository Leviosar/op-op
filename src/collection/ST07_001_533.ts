
import Card from "../entities/Card";

export default class ST07_001_533 extends Card {
    public static id: string = "ST07_001_533";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[When Attacking] [DON!! x2] You may add 1 card from the top or bottom of your Life area to your hand: If your life is at 2 or less, you may place up to 1 card from your hand a the top of your Life area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-001_5fa0a6_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return ST07_001_533.id
    }
    
    public getType() {
        return ST07_001_533.type
    }
    
    public getImage() {
        return ST07_001_533.image
    }
    
    public getName() {
        return ST07_001_533._name
    }
}
