
import Card from "../entities/Card";

export default class OP01_036_173 extends Card {
    public static id: string = "OP01_036_173";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Rest 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-036_e4bbd4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP01_036_173.id
    }
    
    public getType() {
        return OP01_036_173.type
    }
    
    public getImage() {
        return OP01_036_173.image
    }
    
    public getName() {
        return OP01_036_173._name
    }
    
    public getCost(): number {
        return parseInt(OP01_036_173.cost)
    }
}
