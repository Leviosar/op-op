
import Card from "../entities/Card";

export default class OP04_097_781 extends Card {
    public static id: string = "OP04_097_781";
    
    public static _name: string = "Otama";

    public effect: string = "[On Play] Place up to 1 of your opponent's Characters that costs 3 or less with the {Animal} or {SMILE} type on top of their life area face-up.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-097_80dc14_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_097_781.id
    }
    
    public getType() {
        return OP04_097_781.type
    }
    
    public getImage() {
        return OP04_097_781.image
    }
    
    public getName() {
        return OP04_097_781._name
    }
    
    public getCost(): number {
        return parseInt(OP04_097_781.cost)
    }
}
