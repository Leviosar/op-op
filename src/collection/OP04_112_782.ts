
import Card from "../entities/Card";

export default class OP04_112_782 extends Card {
    public static id: string = "OP04_112_782";
    
    public static _name: string = "Yamato";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's characters with a cost that is equal to or less than the total life of you and your opponent. Then, if you have 1 or less life, you may add up to 1 card from the top of your deck to your life area.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-112_296d6a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "9";
    
    public getId() {
        return OP04_112_782.id
    }
    
    public getType() {
        return OP04_112_782.type
    }
    
    public getImage() {
        return OP04_112_782.image
    }
    
    public getName() {
        return OP04_112_782._name
    }
    
    public getCost(): number {
        return parseInt(OP04_112_782.cost)
    }
}
