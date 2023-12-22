
import Card from "../entities/Card";

export default class OP04_052_772 extends Card {
    public static id: string = "OP04_052_772";
    
    public static _name: string = "Black Maria";

    public effect: string = "[Activate: Main] (2) You may rest this Character: Draw 1 card.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-052_517636_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_052_772.id
    }
    
    public getType() {
        return OP04_052_772.type
    }
    
    public getImage() {
        return OP04_052_772.image
    }
    
    public getName() {
        return OP04_052_772._name
    }
    
    public getCost(): number {
        return parseInt(OP04_052_772.cost)
    }
}
