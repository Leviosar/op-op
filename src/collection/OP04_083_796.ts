
import Card from "../entities/Card";

export default class OP04_083_796 extends Card {
    public static id: string = "OP04_083_796";
    
    public static _name: string = "Sabo";

    public effect: string = "<Blocker>\r\n[On Play] Your Characters can not be KO'd by card effects until the start of your next turn. Then, draw 2 cards and trash 2 cards from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-083_0ecfe1_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP04_083_796.id
    }
    
    public getType() {
        return OP04_083_796.type
    }
    
    public getImage() {
        return OP04_083_796.image
    }
    
    public getName() {
        return OP04_083_796._name
    }
    
    public getCost(): number {
        return parseInt(OP04_083_796.cost)
    }
}
