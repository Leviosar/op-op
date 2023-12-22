
import Card from "../entities/Card";

export default class ST10_002_888 extends Card {
    public static id: string = "ST10_002_888";
    
    public static _name: string = "Monkey D Luffy";

    public effect: string = "[Activate: Main] [Once Per Turn] If you have 0 DON!! cards on your field or 8 or more DON!! cards on your field, add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-002_42a695_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return ST10_002_888.id
    }
    
    public getType() {
        return ST10_002_888.type
    }
    
    public getImage() {
        return ST10_002_888.image
    }
    
    public getName() {
        return ST10_002_888._name
    }
    
    public getCost(): number {
        return parseInt(ST10_002_888.cost)
    }
}
