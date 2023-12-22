
import Card from "../entities/Card";

export default class OP03_018_575 extends Card {
    public static id: string = "OP03_018_575";
    
    public static _name: string = "Fire Fist";

    public effect: string = "[Main] You may discard 1 Event from your hand: K.O. up to 1 of your opponent's Characters with 5000 Power or less and up to 1 of your opponent's Characters with 4000  Power or less.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with 5000 Power or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-018_d4bd11_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_018_575.id
    }
    
    public getType() {
        return OP03_018_575.type
    }
    
    public getImage() {
        return OP03_018_575.image
    }
    
    public getName() {
        return OP03_018_575._name
    }
    
    public getCost(): number {
        return parseInt(OP03_018_575.cost)
    }
}
