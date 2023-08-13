
import Card from "../entities/Card";

export default class OP04_103_865 extends Card {
    public static id: string = "OP04_103_865";
    
    public static _name: string = "Kouzuki Hiyori";

    public effect: string = "[On Play] Up to 1 of your {Land of Wano} type Leader or Character cards gains +1000 power during this turn.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-103_7f1dc4_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_103_865.id
    }
    
    public getType() {
        return OP04_103_865.type
    }
    
    public getImage() {
        return OP04_103_865.image
    }
    
    public getName() {
        return OP04_103_865._name
    }
}
