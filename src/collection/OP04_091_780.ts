
import Card from "../entities/Card";

export default class OP04_091_780 extends Card {
    public static id: string = "OP04_091_780";
    
    public static _name: string = "Leo";

    public effect: string = "[On Play] You may rest 1 of your Leader: If your Leader has the {Dressrosa} type, KO up to 1 of your opponent's Cost 1 or lower Characters. Then, trash 2 cards from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-091_6210ea_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_091_780.id
    }
    
    public getType() {
        return OP04_091_780.type
    }
    
    public getImage() {
        return OP04_091_780.image
    }
    
    public getName() {
        return OP04_091_780._name
    }
}
