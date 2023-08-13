
import Card from "../entities/Card";

export default class ST08_007_724 extends Card {
    public static id: string = "ST08_007_724";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST08-007_3f9885_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST08_007_724.id
    }
    
    public getType() {
        return ST08_007_724.type
    }
    
    public getImage() {
        return ST08_007_724.image
    }
    
    public getName() {
        return ST08_007_724._name
    }
}
