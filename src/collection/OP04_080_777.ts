
import Card from "../entities/Card";

export default class OP04_080_777 extends Card {
    public static id: string = "OP04_080_777";
    
    public static _name: string = "Gyats";

    public effect: string = "[On Play] Up to 1 of your {Dressrosa} type Characters can also attack active Characters during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-080_a4d611_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_080_777.id
    }
    
    public getType() {
        return OP04_080_777.type
    }
    
    public getImage() {
        return OP04_080_777.image
    }
    
    public getName() {
        return OP04_080_777._name
    }
    
    public getCost(): number {
        return parseInt(OP04_080_777.cost)
    }
}