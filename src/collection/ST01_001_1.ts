
import Card from "../entities/Card";

export default class ST01_001_1 extends Card {
    public static id: string = "ST01_001_1";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main][Once Per Turn] Give this Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-001_85f00c_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "0";
    
    public getId() {
        return ST01_001_1.id
    }
    
    public getType() {
        return ST01_001_1.type
    }
    
    public getImage() {
        return ST01_001_1.image
    }
    
    public getName() {
        return ST01_001_1._name
    }
    
    public getCost(): number {
        return parseInt(ST01_001_1.cost)
    }
}
