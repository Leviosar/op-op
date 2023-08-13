
import Card from "../entities/Card";

export default class ST01_009_26 extends Card {
    public static id: string = "ST01_009_26";
    
    public static _name: string = "Nami";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-009_137f78_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_009_26.id
    }
    
    public getType() {
        return ST01_009_26.type
    }
    
    public getImage() {
        return ST01_009_26.image
    }
    
    public getName() {
        return ST01_009_26._name
    }
}
