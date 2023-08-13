
import Card from "../entities/Card";

export default class OP03_015_631 extends Card {
    public static id: string = "OP03_015_631";
    
    public static _name: string = "Lim";

    public effect: string = "<Blocker>\r\n[Opponent's Turn] When this card is K.O.ed, give -2000 power to up to 1 of your opponent's Leader or Characters.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-015_747f1c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_015_631.id
    }
    
    public getType() {
        return OP03_015_631.type
    }
    
    public getImage() {
        return OP03_015_631.image
    }
    
    public getName() {
        return OP03_015_631._name
    }
}
