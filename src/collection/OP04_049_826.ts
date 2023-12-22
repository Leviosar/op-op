
import Card from "../entities/Card";

export default class OP04_049_826 extends Card {
    public static id: string = "OP04_049_826";
    
    public static _name: string = "Jack";

    public effect: string = "[On K.O.] Draw 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-049_1f1d2c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_049_826.id
    }
    
    public getType() {
        return OP04_049_826.type
    }
    
    public getImage() {
        return OP04_049_826.image
    }
    
    public getName() {
        return OP04_049_826._name
    }
    
    public getCost(): number {
        return parseInt(OP04_049_826.cost)
    }
}
