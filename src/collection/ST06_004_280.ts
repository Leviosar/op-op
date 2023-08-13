
import Card from "../entities/Card";

export default class ST06_004_280 extends Card {
    public static id: string = "ST06_004_280";
    
    public static _name: string = "Smoker";

    public effect: string = "This character can not be K.O.'d by card effects.\r\n[DON!!x1] As long as there is a Character that costs 0 in play, this character gains <Double Attack> (This card deals 2 damage)";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-004_7e8b4c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_004_280.id
    }
    
    public getType() {
        return ST06_004_280.type
    }
    
    public getImage() {
        return ST06_004_280.image
    }
    
    public getName() {
        return ST06_004_280._name
    }
}
