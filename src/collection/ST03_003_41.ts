
import Card from "../entities/Card";

export default class ST03_003_41 extends Card {
    public static id: string = "ST03_003_41";
    
    public static _name: string = "Crocodile";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card, you can change the attack target to this card.)\r\n[DON!! x1] [On Block] Place up to 1 Character with a cost of 2 or less at the bottom of the owner's deck.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-003_778e99_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_003_41.id
    }
    
    public getType() {
        return ST03_003_41.type
    }
    
    public getImage() {
        return ST03_003_41.image
    }
    
    public getName() {
        return ST03_003_41._name
    }
}
