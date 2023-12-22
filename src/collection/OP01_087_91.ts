
import Card from "../entities/Card";

export default class OP01_087_91 extends Card {
    public static id: string = "OP01_087_91";
    
    public static _name: string = "Officer Agents";

    public effect: string = "[Counter] Play up to 1 Character card with {Baroque Works} in its type and a cost of 3 or less from your hand without paying its cost. \r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-087_79ff50_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_087_91.id
    }
    
    public getType() {
        return OP01_087_91.type
    }
    
    public getImage() {
        return OP01_087_91.image
    }
    
    public getName() {
        return OP01_087_91._name
    }
    
    public getCost(): number {
        return parseInt(OP01_087_91.cost)
    }
}
