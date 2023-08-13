
import Card from "../entities/Card";

export default class OP02_018_512 extends Card {
    public static id: string = "OP02_018_512";
    
    public static _name: string = "Marco";

    public effect: string = "<Blocker>\r\n[On K.O.] You may trash 1 card from hand with {Whitebeard Pirates} in one of its types: If you have 2 or less Life, play this Character card from your Trash as rested.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-018_d30823_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_018_512.id
    }
    
    public getType() {
        return OP02_018_512.type
    }
    
    public getImage() {
        return OP02_018_512.image
    }
    
    public getName() {
        return OP02_018_512._name
    }
}
