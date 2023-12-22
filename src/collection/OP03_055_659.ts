
import Card from "../entities/Card";

export default class OP03_055_659 extends Card {
    public static id: string = "OP03_055_659";
    
    public static _name: string = "Gum Gum Giant Gavel";

    public effect: string = "[Counter] You may trash 1 card from your hand: Give up to 1 of your Leader +4000 power during this battle. Then you may trash the top 2 cards of your deck.\r\n\r\n[Trigger] Return up to 1 Character with a cost of 4 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-055_e3651e_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_055_659.id
    }
    
    public getType() {
        return OP03_055_659.type
    }
    
    public getImage() {
        return OP03_055_659.image
    }
    
    public getName() {
        return OP03_055_659._name
    }
    
    public getCost(): number {
        return parseInt(OP03_055_659.cost)
    }
}
