
import Card from "../entities/Card";

export default class OP04_106_783 extends Card {
    public static id: string = "OP04_106_783";
    
    public static _name: string = "Charlotte Bavarois";

    public effect: string = "[DON!! x1] If you have less Life cards than your opponent, this Character gains +1000 Power.\r\n[Trigger] You may discard 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-106_8d360e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_106_783.id
    }
    
    public getType() {
        return OP04_106_783.type
    }
    
    public getImage() {
        return OP04_106_783.image
    }
    
    public getName() {
        return OP04_106_783._name
    }
}
