
import Card from "../entities/Card";

export default class ST01_016_27 extends Card {
    public static id: string = "ST01_016_27";
    
    public static _name: string = "Diable Jambe";

    public effect: string = "[Main] Choose one of your Leader or Characters with the {Straw Hat Crew} trait: During this turn,  your opponent cannot activate <Blocker> when that Leader or Character attacks.\r\n[Trigger] K.O. 1 of your opponent's Characters with a Cost of 3 or less with <Blocker>.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-016_d23d2c_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return ST01_016_27.id
    }
    
    public getType() {
        return ST01_016_27.type
    }
    
    public getImage() {
        return ST01_016_27.image
    }
    
    public getName() {
        return ST01_016_27._name
    }
    
    public getCost(): number {
        return parseInt(ST01_016_27.cost)
    }
}
