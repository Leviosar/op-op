
import Card from "../entities/Card";

export default class OP01_078_164 extends Card {
    public static id: string = "OP01_078_164";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[DON!! x1] [When attacking]/[On Block] If your hand is 5 cards or less, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-078_a88036_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_078_164.id
    }
    
    public getType() {
        return OP01_078_164.type
    }
    
    public getImage() {
        return OP01_078_164.image
    }
    
    public getName() {
        return OP01_078_164._name
    }
}
