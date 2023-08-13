
import Card from "../entities/Card";

export default class OP04_062_836 extends Card {
    public static id: string = "OP04_062_836";
    
    public static _name: string = "Tom";

    public effect: string = "[Activate: Main] You may trash this Character: If your Leader has the {Water Seven} type, add up to 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-062_2a82a1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_062_836.id
    }
    
    public getType() {
        return OP04_062_836.type
    }
    
    public getImage() {
        return OP04_062_836.image
    }
    
    public getName() {
        return OP04_062_836._name
    }
}
