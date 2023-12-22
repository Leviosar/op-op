
import Card from "../entities/Card";

export default class OP03_085_675 extends Card {
    public static id: string = "OP03_085_675";
    
    public static _name: string = "Corgi";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, and place up to 2 of them in the trash. Then place the remaining cards on the bottom of your deck in any order.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-085_c2b9bc_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP03_085_675.id
    }
    
    public getType() {
        return OP03_085_675.type
    }
    
    public getImage() {
        return OP03_085_675.image
    }
    
    public getName() {
        return OP03_085_675._name
    }
    
    public getCost(): number {
        return parseInt(OP03_085_675.cost)
    }
}
