
import Card from "../entities/Card";

export default class ST01_009_566 extends Card {
    public static id: string = "ST01_009_566";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x1] [Your Turn] While your Life area has 2 or less cards, this Character gains +2000 power.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-009_067c76_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_009_566.id
    }
    
    public getType() {
        return ST01_009_566.type
    }
    
    public getImage() {
        return ST01_009_566.image
    }
    
    public getName() {
        return ST01_009_566._name
    }
}
