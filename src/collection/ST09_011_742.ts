
import Card from "../entities/Card";

export default class ST09_011_742 extends Card {
    public static id: string = "ST09_011_742";
    
    public static _name: string = "Yamato";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains +2000 power until the start of your next turn.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST09-011_e9630a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST09_011_742.id
    }
    
    public getType() {
        return ST09_011_742.type
    }
    
    public getImage() {
        return ST09_011_742.image
    }
    
    public getName() {
        return ST09_011_742._name
    }
}
