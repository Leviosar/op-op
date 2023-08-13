
import Card from "../entities/Card";

export default class ST07_011_565 extends Card {
    public static id: string = "ST07_011_565";
    
    public static _name: string = "Zeus";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain <Banish> during this turn.\r\n[Trigger] Play this card";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-011_a96efa_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST07_011_565.id
    }
    
    public getType() {
        return ST07_011_565.type
    }
    
    public getImage() {
        return ST07_011_565.image
    }
    
    public getName() {
        return ST07_011_565._name
    }
}
