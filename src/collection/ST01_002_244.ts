
import Card from "../entities/Card";

export default class ST01_002_244 extends Card {
    public static id: string = "ST01_002_244";
    
    public static _name: string = "Usopp";

    public effect: string = "[DON!!X2] (When Attacking)  You opponent cannot activate <Blocker> of 5000 or higher Power Characters during this battle.\r\n[Trigger] Play this card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-002_d9434c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST01_002_244.id
    }
    
    public getType() {
        return ST01_002_244.type
    }
    
    public getImage() {
        return ST01_002_244.image
    }
    
    public getName() {
        return ST01_002_244._name
    }
    
    public getCost(): number {
        return parseInt(ST01_002_244.cost)
    }
}
