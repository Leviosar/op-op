
import Card from "../entities/Card";

export default class DON_Luffy_16 extends Card {
    public static id: string = "DON_Luffy_16";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "Your Turn +1000";
    
    public source: string = "Misc [MISC]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/DON-Luffy_7a008d_jp.png";
    
    public static type = "don";
    
    public getId() {
        return DON_Luffy_16.id
    }
    
    public getType() {
        return DON_Luffy_16.type
    }
    
    public getImage() {
        return DON_Luffy_16.image
    }
    
    public getName() {
        return DON_Luffy_16._name
    }
}
