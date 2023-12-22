
import Card from "../entities/Card";

export default class OP01_055_184 extends Card {
    public static id: string = "OP01_055_184";
    
    public static _name: string = "You Can Be My Samurai!!";

    public effect: string = "[Main] You may rest 2 of your Characters: Draw 2 cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-055_413a12_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP01_055_184.id
    }
    
    public getType() {
        return OP01_055_184.type
    }
    
    public getImage() {
        return OP01_055_184.image
    }
    
    public getName() {
        return OP01_055_184._name
    }
    
    public getCost(): number {
        return parseInt(OP01_055_184.cost)
    }
}
