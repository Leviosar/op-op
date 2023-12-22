
import Card from "../entities/Card";

export default class ST01_003_28 extends Card {
    public static id: string = "ST01_003_28";
    
    public static _name: string = "Diable Jambe";

    public effect: string = "[Main] Choose one of your Leader or Characters with the {Straw Hat Crew} trait: During this turn,  your opponent cannot activate <Blocker> when that Leader or Character attacks.\r\n[Trigger] K.O. 1 of your opponent's Characters with a Cost of 3 or less with <Blocker>.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-003_36520e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST01_003_28.id
    }
    
    public getType() {
        return ST01_003_28.type
    }
    
    public getImage() {
        return ST01_003_28.image
    }
    
    public getName() {
        return ST01_003_28._name
    }
    
    public getCost(): number {
        return parseInt(ST01_003_28.cost)
    }
}
