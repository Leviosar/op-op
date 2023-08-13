
import Card from "../entities/Card";

export default class OP02_041_339 extends Card {
    public static id: string = "OP02_041_339";
    
    public static _name: string = "Monkey. D. Luffy";

    public effect: string = "<Blocker>\r\n[On Play] Play up to 1 cost 4 or lower <FILM> or <Straw Hat Crew> type Character card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-041_5ef7e8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_041_339.id
    }
    
    public getType() {
        return OP02_041_339.type
    }
    
    public getImage() {
        return OP02_041_339.image
    }
    
    public getName() {
        return OP02_041_339._name
    }
}
