
import Card from "../entities/Card";

export default class OP04_113_873 extends Card {
    public static id: string = "OP04_113_873";
    
    public static _name: string = "Rabiyan";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-113_4556de_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_113_873.id
    }
    
    public getType() {
        return OP04_113_873.type
    }
    
    public getImage() {
        return OP04_113_873.image
    }
    
    public getName() {
        return OP04_113_873._name
    }
    
    public getCost(): number {
        return parseInt(OP04_113_873.cost)
    }
}
