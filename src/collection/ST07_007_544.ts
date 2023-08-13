
import Card from "../entities/Card";

export default class ST07_007_544 extends Card {
    public static id: string = "ST07_007_544";
    
    public static _name: string = "Charlotte Brulee";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-007_b1d372_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST07_007_544.id
    }
    
    public getType() {
        return ST07_007_544.type
    }
    
    public getImage() {
        return ST07_007_544.image
    }
    
    public getName() {
        return ST07_007_544._name
    }
}
