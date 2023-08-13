
import Card from "../entities/Card";

export default class ST08_013_739 extends Card {
    public static id: string = "ST08_013_739";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[DON!!x1] At the end of the battle in which this Character battles an opponent's Character, you may K.O. your opponent's Character that battled. If you do, K.O. this Character.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST08-013_735bee_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST08_013_739.id
    }
    
    public getType() {
        return ST08_013_739.type
    }
    
    public getImage() {
        return ST08_013_739.image
    }
    
    public getName() {
        return ST08_013_739._name
    }
}
