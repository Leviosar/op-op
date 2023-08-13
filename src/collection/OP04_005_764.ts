
import Card from "../entities/Card";

export default class OP04_005_764 extends Card {
    public static id: string = "OP04_005_764";
    
    public static _name: string = "Kung-Fu Dugong";

    public effect: string = "If you have a [Kung-Fu Dugong] in play other than this Character, this Character gains <Blocker>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-005_3a6aa5_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_005_764.id
    }
    
    public getType() {
        return OP04_005_764.type
    }
    
    public getImage() {
        return OP04_005_764.image
    }
    
    public getName() {
        return OP04_005_764._name
    }
}
