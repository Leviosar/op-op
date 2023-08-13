
import Card from "../entities/Card";

export default class OP02_064_309 extends Card {
    public static id: string = "OP02_064_309";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[DON!! x1] [When attacking] You may trash 1 card from your hand: Return up to 1 cost 2 or lower Character to the bottom of its owner's deck. Then, when this battle ends, return this Character to the bottom of its owner's deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-064_8ec7ff_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_064_309.id
    }
    
    public getType() {
        return OP02_064_309.type
    }
    
    public getImage() {
        return OP02_064_309.image
    }
    
    public getName() {
        return OP02_064_309._name
    }
}
