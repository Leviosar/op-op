
import Card from "../entities/Card";

export default class OP03_041_612 extends Card {
    public static id: string = "OP03_041_612";
    
    public static _name: string = "Usopp";

    public effect: string = "<Rush>\r\n[DON!!x1] When your opponent takes damage to their Life through the attack of this Character, you may trash 7 cards from the top of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-041_1375b8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_041_612.id
    }
    
    public getType() {
        return OP03_041_612.type
    }
    
    public getImage() {
        return OP03_041_612.image
    }
    
    public getName() {
        return OP03_041_612._name
    }
    
    public getCost(): number {
        return parseInt(OP03_041_612.cost)
    }
}
