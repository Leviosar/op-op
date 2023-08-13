
import Card from "../entities/Card";

export default class ST01_012_8 extends Card {
    public static id: string = "ST01_012_8";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "<Rush>(This Character can attack the turn it enters play.)\r\n[DON!! x2][When Attacking] Your opponent's can't activate <Blocker> for this battle.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-012_6bfaec_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_012_8.id
    }
    
    public getType() {
        return ST01_012_8.type
    }
    
    public getImage() {
        return ST01_012_8.image
    }
    
    public getName() {
        return ST01_012_8._name
    }
}
