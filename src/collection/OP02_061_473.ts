
import Card from "../entities/Card";

export default class OP02_061_473 extends Card {
    public static id: string = "OP02_061_473";
    
    public static _name: string = "Morley";

    public effect: string = "[When Attacking] If you have 1 or less cards in your hand, your opponent cannot activate the <Blocker> of any Character with a cost of 5 or less during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-061_f32ff6_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_061_473.id
    }
    
    public getType() {
        return OP02_061_473.type
    }
    
    public getImage() {
        return OP02_061_473.image
    }
    
    public getName() {
        return OP02_061_473._name
    }
}
