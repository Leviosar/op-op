
import Card from "../entities/Card";

export default class ST05_010_231 extends Card {
    public static id: string = "ST05_010_231";
    
    public static _name: string = "Z";

    public effect: string = "If this Character battles with a <Strike> attribute Character, this Character gains +3000 Power during this turn.\r\n[Activate: Main] [Once per turn] DON!! -1: This Character gains +2000 Power during this turn.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST05-010_96d5c9_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST05_010_231.id
    }
    
    public getType() {
        return ST05_010_231.type
    }
    
    public getImage() {
        return ST05_010_231.image
    }
    
    public getName() {
        return ST05_010_231._name
    }
}
