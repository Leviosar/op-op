
import Card from "../entities/Card";

export default class OP01_034_539 extends Card {
    public static id: string = "OP01_034_539";
    
    public static _name: string = "Inuarashi";

    public effect: string = "[DON!! x2][When attacking] Set 1 of your DON!! as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-034_86470d_jp.png";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_034_539.id
    }
    
    public getType() {
        return OP01_034_539.type
    }
    
    public getImage() {
        return OP01_034_539.image
    }
    
    public getName() {
        return OP01_034_539._name
    }
    
    public getCost(): number {
        return parseInt(OP01_034_539.cost)
    }
}
