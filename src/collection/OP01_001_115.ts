
import Card from "../entities/Card";

export default class OP01_001_115 extends Card {
    public static id: string = "OP01_001_115";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] [Your Turn] All your Characters gain +1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-001_332dbe_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP01_001_115.id
    }
    
    public getType() {
        return OP01_001_115.type
    }
    
    public getImage() {
        return OP01_001_115.image
    }
    
    public getName() {
        return OP01_001_115._name
    }
    
    public getCost(): number {
        return parseInt(OP01_001_115.cost)
    }
}
