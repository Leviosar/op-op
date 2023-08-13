
import Card from "../entities/Card";

export default class ST08_006_734 extends Card {
    public static id: string = "ST08_006_734";
    
    public static _name: string = "Shirahoshi";

    public effect: string = "<Blocker>\r\n[On Play] Give up to 1 of your opponent's Characters -4 cost during this turn.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST08-006_2bf7e8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST08_006_734.id
    }
    
    public getType() {
        return ST08_006_734.type
    }
    
    public getImage() {
        return ST08_006_734.image
    }
    
    public getName() {
        return ST08_006_734._name
    }
}
