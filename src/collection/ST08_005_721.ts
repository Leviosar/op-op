
import Card from "../entities/Card";

export default class ST08_005_721 extends Card {
    public static id: string = "ST08_005_721";
    
    public static _name: string = "Shanks";

    public effect: string = "[On Play] You may trash 1 card from your hand: KO all characters with a cost of 1 or less.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-005_7e4cdb_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "9";
    
    public getId() {
        return ST08_005_721.id
    }
    
    public getType() {
        return ST08_005_721.type
    }
    
    public getImage() {
        return ST08_005_721.image
    }
    
    public getName() {
        return ST08_005_721._name
    }
    
    public getCost(): number {
        return parseInt(ST08_005_721.cost)
    }
}
