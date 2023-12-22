
import Card from "../entities/Card";

export default class OP01_051_180 extends Card {
    public static id: string = "OP01_051_180";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "[DON!!x1] [Opponent's Turn] As long as this Character is rested, your opponent cannot attack anything other than Characters named [Eustass\"Captain\"Kid].\r\n[Activate: Main] [Once Per Turn] You may rest this Character: You may play up to 1 Character that costs 3 or less from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-051_4e4038_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "8";
    
    public getId() {
        return OP01_051_180.id
    }
    
    public getType() {
        return OP01_051_180.type
    }
    
    public getImage() {
        return OP01_051_180.image
    }
    
    public getName() {
        return OP01_051_180._name
    }
    
    public getCost(): number {
        return parseInt(OP01_051_180.cost)
    }
}