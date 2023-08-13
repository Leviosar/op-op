
import Card from "../entities/Card";

export default class ST01_007_25 extends Card {
    public static id: string = "ST01_007_25";
    
    public static _name: string = "Nami";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-007_dec1fa_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_007_25.id
    }
    
    public getType() {
        return ST01_007_25.type
    }
    
    public getImage() {
        return ST01_007_25.image
    }
    
    public getName() {
        return ST01_007_25._name
    }
}
