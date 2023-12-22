
import Card from "../entities/Card";

export default class OP01_003_66 extends Card {
    public static id: string = "OP01_003_66";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main] [Once Per Turn] (4) (Rest the designated number of DON!! in the Cost Area): Set one of your cost 5 or lower {Supernovas} or {Straw Hat Crew} characters to active and give that character +1000 power this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-003_f724f9_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "0";
    
    public getId() {
        return OP01_003_66.id
    }
    
    public getType() {
        return OP01_003_66.type
    }
    
    public getImage() {
        return OP01_003_66.image
    }
    
    public getName() {
        return OP01_003_66._name
    }
    
    public getCost(): number {
        return parseInt(OP01_003_66.cost)
    }
}
