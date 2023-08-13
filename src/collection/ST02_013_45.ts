
import Card from "../entities/Card";

export default class ST02_013_45 extends Card {
    public static id: string = "ST02_013_45";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "<Blocker>\r\n[Don!! x1] [When your turn ends] Switch this Character to Active";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-013_4346d0_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST02_013_45.id
    }
    
    public getType() {
        return ST02_013_45.type
    }
    
    public getImage() {
        return ST02_013_45.image
    }
    
    public getName() {
        return ST02_013_45._name
    }
}
