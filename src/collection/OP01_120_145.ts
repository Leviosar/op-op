
import Card from "../entities/Card";

export default class OP01_120_145 extends Card {
    public static id: string = "OP01_120_145";
    
    public static _name: string = "Shanks";

    public effect: string = "<Rush> (This card can attack on the turn in which it is played.)\r\n[When Attacking] During this battle, your opponent can not activate <Blocker> of Characters with 2000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-120_d28525_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "9";
    
    public getId() {
        return OP01_120_145.id
    }
    
    public getType() {
        return OP01_120_145.type
    }
    
    public getImage() {
        return OP01_120_145.image
    }
    
    public getName() {
        return OP01_120_145._name
    }
    
    public getCost(): number {
        return parseInt(OP01_120_145.cost)
    }
}
