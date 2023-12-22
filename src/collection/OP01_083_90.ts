
import Card from "../entities/Card";

export default class OP01_083_90 extends Card {
    public static id: string = "OP01_083_90";
    
    public static _name: string = "Mr. 1 (Daz Bones)";

    public effect: string = "[DON!! x1] [During Your Turn] If your Leader is {Baroque Works} type, for every 2 Event cards in your Trash, this Character gains +1000 Power. ";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-083_305f7c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_083_90.id
    }
    
    public getType() {
        return OP01_083_90.type
    }
    
    public getImage() {
        return OP01_083_90.image
    }
    
    public getName() {
        return OP01_083_90._name
    }
    
    public getCost(): number {
        return parseInt(OP01_083_90.cost)
    }
}
