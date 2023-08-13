
import Card from "../entities/Card";

export default class OP02_095_495 extends Card {
    public static id: string = "OP02_095_495";
    
    public static _name: string = "Onigumo";

    public effect: string = "If there is a Character with a cost of 0, this Character gains [Banish].";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-095_6e08fb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_095_495.id
    }
    
    public getType() {
        return OP02_095_495.type
    }
    
    public getImage() {
        return OP02_095_495.image
    }
    
    public getName() {
        return OP02_095_495._name
    }
}
