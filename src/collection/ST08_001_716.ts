
import Card from "../entities/Card";

export default class ST08_001_716 extends Card {
    public static id: string = "ST08_001_716";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Your Turn] When a Character is K.O.'d, give up to 1 rested DON!! to this Leader.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST08-001_1f93a7_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return ST08_001_716.id
    }
    
    public getType() {
        return ST08_001_716.type
    }
    
    public getImage() {
        return ST08_001_716.image
    }
    
    public getName() {
        return ST08_001_716._name
    }
}
