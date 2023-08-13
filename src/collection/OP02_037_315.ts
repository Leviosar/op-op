
import Card from "../entities/Card";

export default class OP02_037_315 extends Card {
    public static id: string = "OP02_037_315";
    
    public static _name: string = "Nico Robin";

    public effect: string = "[On Play] Play up to 1 cost 2 or lower {FILM} or {Straw Hat Crew} type Character card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-037_164d58_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_037_315.id
    }
    
    public getType() {
        return OP02_037_315.type
    }
    
    public getImage() {
        return OP02_037_315.image
    }
    
    public getName() {
        return OP02_037_315._name
    }
}
