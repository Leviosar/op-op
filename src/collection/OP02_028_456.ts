
import Card from "../entities/Card";

export default class OP02_028_456 extends Card {
    public static id: string = "OP02_028_456";
    
    public static _name: string = "Moby Dick";

    public effect: string = "[Your Turn] If you have 1 or less Life cards, your [Edward.Newgate] and all your Characters with a type including \"Whitebeard Pirates\" gain +2000 power.\r\n[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-028_286dc9_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_028_456.id
    }
    
    public getType() {
        return OP02_028_456.type
    }
    
    public getImage() {
        return OP02_028_456.image
    }
    
    public getName() {
        return OP02_028_456._name
    }
}
