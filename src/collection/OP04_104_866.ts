
import Card from "../entities/Card";

export default class OP04_104_866 extends Card {
    public static id: string = "OP04_104_866";
    
    public static _name: string = "Sanji";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-104_e9a2d5_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_104_866.id
    }
    
    public getType() {
        return OP04_104_866.type
    }
    
    public getImage() {
        return OP04_104_866.image
    }
    
    public getName() {
        return OP04_104_866._name
    }
}
