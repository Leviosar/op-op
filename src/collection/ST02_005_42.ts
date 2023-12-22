
import Card from "../entities/Card";

export default class ST02_005_42 extends Card {
    public static id: string = "ST02_005_42";
    
    public static _name: string = "Killer";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less\r\n[Trigger] Play this card ";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-005_0294b4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST02_005_42.id
    }
    
    public getType() {
        return ST02_005_42.type
    }
    
    public getImage() {
        return ST02_005_42.image
    }
    
    public getName() {
        return ST02_005_42._name
    }
    
    public getCost(): number {
        return parseInt(ST02_005_42.cost)
    }
}
