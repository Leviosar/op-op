
import Card from "../entities/Card";

export default class ST01_002_23 extends Card {
    public static id: string = "ST01_002_23";
    
    public static _name: string = "Usopp";

    public effect: string = "[DON!!X2] (When Attacking)  You opponent cannot activate <Blocker> of 5000 or higher Power Characters during this battle.\r\n[Trigger] Play this card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-002_0864a6_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_002_23.id
    }
    
    public getType() {
        return ST01_002_23.type
    }
    
    public getImage() {
        return ST01_002_23.image
    }
    
    public getName() {
        return ST01_002_23._name
    }
}
