
import Card from "../entities/Card";

export default class ST01_014_6 extends Card {
    public static id: string = "ST01_014_6";
    
    public static _name: string = "Guard Point";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +3000 power during this battle.\r\n[Trigger] Your Leader or 1 of your Characters gains +1000 power during this turn.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-014_237f36_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST01_014_6.id
    }
    
    public getType() {
        return ST01_014_6.type
    }
    
    public getImage() {
        return ST01_014_6.image
    }
    
    public getName() {
        return ST01_014_6._name
    }
}
