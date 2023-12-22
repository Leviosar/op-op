
import Card from "../entities/Card";

export default class OP03_118_701 extends Card {
    public static id: string = "OP03_118_701";
    
    public static _name: string = "Ikoku Sovereignty";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +5000 power during this battle.\r\n[Trigger] You may discard 2 cards from your hand: Add up to 1 card from the top of your deck to the top of your life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-118_60abce_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_118_701.id
    }
    
    public getType() {
        return OP03_118_701.type
    }
    
    public getImage() {
        return OP03_118_701.image
    }
    
    public getName() {
        return OP03_118_701._name
    }
    
    public getCost(): number {
        return parseInt(OP03_118_701.cost)
    }
}
