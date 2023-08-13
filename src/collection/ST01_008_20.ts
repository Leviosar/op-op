
import Card from "../entities/Card";

export default class ST01_008_20 extends Card {
    public static id: string = "ST01_008_20";
    
    public static _name: string = "Thousand Sunny";

    public effect: string = "[Activate: Main] You may rest this Stage: 1 {Straw Hat Crew} type Leader or Character card on your field gains +1000 power during this turn.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-008_bfa16a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_008_20.id
    }
    
    public getType() {
        return ST01_008_20.type
    }
    
    public getImage() {
        return ST01_008_20.image
    }
    
    public getName() {
        return ST01_008_20._name
    }
}
