
import Card from "../entities/Card";

export default class ST07_015_588 extends Card {
    public static id: string = "ST07_015_588";
    
    public static _name: string = "Soul Pocus";

    public effect: string = "[Main] Your opponent chooses 1 from below.\r\n- Trash 1 Life card from the top card of your opponent's Life area.\r\n- Put 1 card from the top of your deck on top of your Life area.\r\n\r\n[Trigger] Activate this card's [Main] effect";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-017_30ab3b_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST07_015_588.id
    }
    
    public getType() {
        return ST07_015_588.type
    }
    
    public getImage() {
        return ST07_015_588.image
    }
    
    public getName() {
        return ST07_015_588._name
    }
}
