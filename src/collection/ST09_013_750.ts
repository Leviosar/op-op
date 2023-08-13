
import Card from "../entities/Card";

export default class ST09_013_750 extends Card {
    public static id: string = "ST09_013_750";
    
    public static _name: string = "Portgas D. Ace";

    public effect: string = "[Once Per Turn] If this Character would be KO'ed, you can trash 1 card from the top or bottom of your Life Area instead.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST09-013_207d80_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST09_013_750.id
    }
    
    public getType() {
        return ST09_013_750.type
    }
    
    public getImage() {
        return ST09_013_750.image
    }
    
    public getName() {
        return ST09_013_750._name
    }
}
