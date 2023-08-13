
import Card from "../entities/Card";

export default class OP02_062_330 extends Card {
    public static id: string = "OP02_062_330";
    
    public static _name: string = "Monkey. D. Luffy";

    public effect: string = "[On Play] / [When Attacking] You may trash 2 cards from your hand: Return up to 1 cost 4 or lower Character to its owner's hand. Then, this Character gains <Double Attack> during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-062_1b963d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_062_330.id
    }
    
    public getType() {
        return OP02_062_330.type
    }
    
    public getImage() {
        return OP02_062_330.image
    }
    
    public getName() {
        return OP02_062_330._name
    }
}
