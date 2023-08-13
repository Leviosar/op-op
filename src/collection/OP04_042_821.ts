
import Card from "../entities/Card";

export default class OP04_042_821 extends Card {
    public static id: string = "OP04_042_821";
    
    public static _name: string = "Ipponmatsu";

    public effect: string = "[On Play] Up to 1 of your <Slash> attribute Characters gains +3000 power during this turn. Then, trash 1 card from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-042_35ff42_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_042_821.id
    }
    
    public getType() {
        return OP04_042_821.type
    }
    
    public getImage() {
        return OP04_042_821.image
    }
    
    public getName() {
        return OP04_042_821._name
    }
}
