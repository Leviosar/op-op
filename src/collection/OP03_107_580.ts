
import Card from "../entities/Card";

export default class OP03_107_580 extends Card {
    public static id: string = "OP03_107_580";
    
    public static _name: string = "Charlotte Galette";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-107_118baa_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_107_580.id
    }
    
    public getType() {
        return OP03_107_580.type
    }
    
    public getImage() {
        return OP03_107_580.image
    }
    
    public getName() {
        return OP03_107_580._name
    }
    
    public getCost(): number {
        return parseInt(OP03_107_580.cost)
    }
}
