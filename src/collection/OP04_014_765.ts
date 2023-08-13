
import Card from "../entities/Card";

export default class OP04_014_765 extends Card {
    public static id: string = "OP04_014_765";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "<Banish>";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-014_e2e9c1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_014_765.id
    }
    
    public getType() {
        return OP04_014_765.type
    }
    
    public getImage() {
        return OP04_014_765.image
    }
    
    public getName() {
        return OP04_014_765._name
    }
}
