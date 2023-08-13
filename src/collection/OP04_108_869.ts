
import Card from "../entities/Card";

export default class OP04_108_869 extends Card {
    public static id: string = "OP04_108_869";
    
    public static _name: string = "Charlotte Moscato";

    public effect: string = "[DON!! x1] This Character gains <Banish>.\r\n(When this card deals damage, the target card is trashed without activating its Trigger.)\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-108_36fc1f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_108_869.id
    }
    
    public getType() {
        return OP04_108_869.type
    }
    
    public getImage() {
        return OP04_108_869.image
    }
    
    public getName() {
        return OP04_108_869._name
    }
}
