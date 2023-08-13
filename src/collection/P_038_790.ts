
import Card from "../entities/Card";

export default class P_038_790 extends Card {
    public static id: string = "P_038_790";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] You may rest 1 of your Leaders: K.O. up to 1 of your opponent's Characters with a Cost of 1 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-038_5d8429_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_038_790.id
    }
    
    public getType() {
        return P_038_790.type
    }
    
    public getImage() {
        return P_038_790.image
    }
    
    public getName() {
        return P_038_790._name
    }
}
