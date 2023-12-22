
import Card from "../entities/Card";

export default class OP01_033_172 extends Card {
    public static id: string = "OP01_033_172";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Rest 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-033_af7043_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_033_172.id
    }
    
    public getType() {
        return OP01_033_172.type
    }
    
    public getImage() {
        return OP01_033_172.image
    }
    
    public getName() {
        return OP01_033_172._name
    }
    
    public getCost(): number {
        return parseInt(OP01_033_172.cost)
    }
}
