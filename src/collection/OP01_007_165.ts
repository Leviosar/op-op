
import Card from "../entities/Card";

export default class OP01_007_165 extends Card {
    public static id: string = "OP01_007_165";
    
    public static _name: string = "Caribou";

    public effect: string = "[On K.O.] K.O. up to one of your opponent's Characters with 4000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-007_d90073_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_007_165.id
    }
    
    public getType() {
        return OP01_007_165.type
    }
    
    public getImage() {
        return OP01_007_165.image
    }
    
    public getName() {
        return OP01_007_165._name
    }
    
    public getCost(): number {
        return parseInt(OP01_007_165.cost)
    }
}
