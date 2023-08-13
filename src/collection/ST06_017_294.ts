
import Card from "../entities/Card";

export default class ST06_017_294 extends Card {
    public static id: string = "ST06_017_294";
    
    public static _name: string = "Marineford";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters -1 cost during this turn.\r\n[Activate: Main] You may rest this Stage: If your Leader has the {Navy} type, give up to 1 of your opponent's Characters -1 to their cost during this turn.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-017_825bcb_jp.jpg";
    
    public static type = "stage";
    
    public getId() {
        return ST06_017_294.id
    }
    
    public getType() {
        return ST06_017_294.type
    }
    
    public getImage() {
        return ST06_017_294.image
    }
    
    public getName() {
        return ST06_017_294._name
    }
}
