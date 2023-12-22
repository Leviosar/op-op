
import Card from "../entities/Card";

export default class OP03_113_754 extends Card {
    public static id: string = "OP03_113_754";
    
    public static _name: string = "Charlotte Perospero";

    public effect: string = "[On K.O.] Look at the top 3 cards of your deck, reveal 1 {Big Mom Pirates} type card and add it to your hand. Return the rest to the bottom of your deck in any order.\r\n[Trigger] You may discard 1 card from your hand: Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-113_13e245_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_113_754.id
    }
    
    public getType() {
        return OP03_113_754.type
    }
    
    public getImage() {
        return OP03_113_754.image
    }
    
    public getName() {
        return OP03_113_754._name
    }
    
    public getCost(): number {
        return parseInt(OP03_113_754.cost)
    }
}