
import Card from "../entities/Card";

export default class OP04_011_760 extends Card {
    public static id: string = "OP04_011_760";
    
    public static _name: string = "Nami";

    public effect: string = "[When Attacking] Reveal 1 card from the top of your deck. If the revealed card is a Character card with 6000 power or more, this Character gains +3000 power during this turn. Then, place the revealed card at the bottom of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-011_e873b8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_011_760.id
    }
    
    public getType() {
        return OP04_011_760.type
    }
    
    public getImage() {
        return OP04_011_760.image
    }
    
    public getName() {
        return OP04_011_760._name
    }
}
