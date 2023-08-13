
import Card from "../entities/Card";

export default class ST07_009_562 extends Card {
    public static id: string = "ST07_009_562";
    
    public static _name: string = "Charlotte Mont D'Or";

    public effect: string = "[Activate:Main] You may rest this Character and take the card at the top or bottom of your Life Area to your hand: K.O. up to 1 of your opponent's Characters that costs 3 or less\r\n\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-009_48e209_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST07_009_562.id
    }
    
    public getType() {
        return ST07_009_562.type
    }
    
    public getImage() {
        return ST07_009_562.image
    }
    
    public getName() {
        return ST07_009_562._name
    }
}
