
import Card from "../entities/Card";

export default class OP01_026_83 extends Card {
    public static id: string = "OP01_026_83";
    
    public static _name: string = "Gum-Gum Red Hawk";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 4000  Power for the duration of the battle. Then, K.O. one of your opponent’s Characters with 4000 Power or less.\r\n[Trigger] Your opponent's Leader or 1 of their Characters lose 10000 power for the duration of the turn.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-026_05a4b1_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_026_83.id
    }
    
    public getType() {
        return OP01_026_83.type
    }
    
    public getImage() {
        return OP01_026_83.image
    }
    
    public getName() {
        return OP01_026_83._name
    }
}
