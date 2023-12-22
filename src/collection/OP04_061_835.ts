
import Card from "../entities/Card";

export default class OP04_061_835 extends Card {
    public static id: string = "OP04_061_835";
    
    public static _name: string = "Tom";

    public effect: string = "[Activate: Main] You may trash this Character: If your Leader has the {Water Seven} type, add up to 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-061_369a98_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_061_835.id
    }
    
    public getType() {
        return OP04_061_835.type
    }
    
    public getImage() {
        return OP04_061_835.image
    }
    
    public getName() {
        return OP04_061_835._name
    }
    
    public getCost(): number {
        return parseInt(OP04_061_835.cost)
    }
}
