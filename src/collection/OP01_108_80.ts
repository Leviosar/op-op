
import Card from "../entities/Card";

export default class OP01_108_80 extends Card {
    public static id: string = "OP01_108_80";
    
    public static _name: string = "Kamazo the Manslayer";

    public effect: string = "[On K.O.] DON!! -1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. 1 of your \r\nopponent’s Characters with a cost of 5 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-108_a25329_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_108_80.id
    }
    
    public getType() {
        return OP01_108_80.type
    }
    
    public getImage() {
        return OP01_108_80.image
    }
    
    public getName() {
        return OP01_108_80._name
    }
    
    public getCost(): number {
        return parseInt(OP01_108_80.cost)
    }
}
