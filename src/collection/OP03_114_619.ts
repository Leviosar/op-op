
import Card from "../entities/Card";

export default class OP03_114_619 extends Card {
    public static id: string = "OP03_114_619";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[On Play] If your Leader has the {Big Mom Pirates} type, place up to 1 card from the top of your deck at the top or bottom of your Life. Then, trash up to 1 card from the top of your opponent's Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-114_bd90ec_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "10";
    
    public getId() {
        return OP03_114_619.id
    }
    
    public getType() {
        return OP03_114_619.type
    }
    
    public getImage() {
        return OP03_114_619.image
    }
    
    public getName() {
        return OP03_114_619._name
    }
    
    public getCost(): number {
        return parseInt(OP03_114_619.cost)
    }
}
