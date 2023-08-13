
import Card from "../entities/Card";

export default class ST08_008_723 extends Card {
    public static id: string = "ST08_008_723";
    
    public static _name: string = "Higuma";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters -2 cost during this turn.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST08-008_e99604_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST08_008_723.id
    }
    
    public getType() {
        return ST08_008_723.type
    }
    
    public getImage() {
        return ST08_008_723.image
    }
    
    public getName() {
        return ST08_008_723._name
    }
}
