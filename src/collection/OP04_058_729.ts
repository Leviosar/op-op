
import Card from "../entities/Card";

export default class OP04_058_729 extends Card {
    public static id: string = "OP04_058_729";
    
    public static _name: string = "Crocodile";

    public effect: string = "[Opponent's Turn] [Once per Turn] When you return DON!! from your field to the DON!! deck through one of your effects, add 1 DON!! from your DON!! deck as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-058_50071e_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP04_058_729.id
    }
    
    public getType() {
        return OP04_058_729.type
    }
    
    public getImage() {
        return OP04_058_729.image
    }
    
    public getName() {
        return OP04_058_729._name
    }
}
