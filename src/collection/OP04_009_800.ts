
import Card from "../entities/Card";

export default class OP04_009_800 extends Card {
    public static id: string = "OP04_009_800";
    
    public static _name: string = "Super Spot-Billed Duck Troops";

    public effect: string = "[When Attacking] You may give your 1 active Leader −5000 power during this turn: Return this Character to the owner's hand at the end of this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-009_42dcba_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_009_800.id
    }
    
    public getType() {
        return OP04_009_800.type
    }
    
    public getImage() {
        return OP04_009_800.image
    }
    
    public getName() {
        return OP04_009_800._name
    }
}
