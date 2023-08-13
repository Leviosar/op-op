
import Card from "../entities/Card";

export default class OP01_111_212 extends Card {
    public static id: string = "OP01_111_212";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On Block] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Character gains +1000 power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-111_d0bb9e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_111_212.id
    }
    
    public getType() {
        return OP01_111_212.type
    }
    
    public getImage() {
        return OP01_111_212.image
    }
    
    public getName() {
        return OP01_111_212._name
    }
}
