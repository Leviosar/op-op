
import Card from "../entities/Card";

export default class OP03_079_598 extends Card {
    public static id: string = "OP03_079_598";
    
    public static _name: string = "Vergo";

    public effect: string = "[DON!! x1] This Character cannot be K.O.ed by battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-079_099158_jp.png";
    
    public static type = "char";
    
    public getId() {
        return OP03_079_598.id
    }
    
    public getType() {
        return OP03_079_598.type
    }
    
    public getImage() {
        return OP03_079_598.image
    }
    
    public getName() {
        return OP03_079_598._name
    }
}
