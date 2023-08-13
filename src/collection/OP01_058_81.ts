
import Card from "../entities/Card";

export default class OP01_058_81 extends Card {
    public static id: string = "OP01_058_81";
    
    public static _name: string = "Punk Gibson";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 4000  Power for the duration of the battle. Then, rest one of your opponent’s Characters that costs 4 or less.\r\n[Trigger] Rest 1 of your opponent's Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-058_280365_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_058_81.id
    }
    
    public getType() {
        return OP01_058_81.type
    }
    
    public getImage() {
        return OP01_058_81.image
    }
    
    public getName() {
        return OP01_058_81._name
    }
}
