
import Card from "../entities/Card";

export default class OP03_088_678 extends Card {
    public static id: string = "OP03_088_678";
    
    public static _name: string = "Fukuro";

    public effect: string = "This card cannot be K.O.ed by effects.\r\n<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-088_9f0e11_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_088_678.id
    }
    
    public getType() {
        return OP03_088_678.type
    }
    
    public getImage() {
        return OP03_088_678.image
    }
    
    public getName() {
        return OP03_088_678._name
    }
}
