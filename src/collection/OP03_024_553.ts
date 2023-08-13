
import Card from "../entities/Card";

export default class OP03_024_553 extends Card {
    public static id: string = "OP03_024_553";
    
    public static _name: string = "Gin";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 2 of your opponent's Characters that cost 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-024_4b9694_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_024_553.id
    }
    
    public getType() {
        return OP03_024_553.type
    }
    
    public getImage() {
        return OP03_024_553.image
    }
    
    public getName() {
        return OP03_024_553._name
    }
}
