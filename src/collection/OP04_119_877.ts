
import Card from "../entities/Card";

export default class OP04_119_877 extends Card {
    public static id: string = "OP04_119_877";
    
    public static _name: string = "Donquixote Rosinante";

    public effect: string = "[Opponent's Turn] If this Character is rested, your active Characters with a base cost of 5 cannot be K.O.'d by effects.\r\n[On Play] You may rest this Character: Play up to 1 green Character card with a cost of 5 from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-119_330f0f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_119_877.id
    }
    
    public getType() {
        return OP04_119_877.type
    }
    
    public getImage() {
        return OP04_119_877.image
    }
    
    public getName() {
        return OP04_119_877._name
    }
}
