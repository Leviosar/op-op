
import Card from "../entities/Card";

export default class OP03_051_655 extends Card {
    public static id: string = "OP03_051_655";
    
    public static _name: string = "Bell-Mère";

    public effect: string = "[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.\r\n[On K.O] You may trash 3 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-051_67ba62_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_051_655.id
    }
    
    public getType() {
        return OP03_051_655.type
    }
    
    public getImage() {
        return OP03_051_655.image
    }
    
    public getName() {
        return OP03_051_655._name
    }
    
    public getCost(): number {
        return parseInt(OP03_051_655.cost)
    }
}
