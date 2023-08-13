
import Card from "../entities/Card";

export default class OP04_118_784 extends Card {
    public static id: string = "OP04_118_784";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "All of your Red Characters with a cost of 3 or more other than this Character gain <Rush>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-118_446be1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_118_784.id
    }
    
    public getType() {
        return OP04_118_784.type
    }
    
    public getImage() {
        return OP04_118_784.image
    }
    
    public getName() {
        return OP04_118_784._name
    }
}
