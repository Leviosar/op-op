
import Card from "../entities/Card";

export default class ST05_016_250 extends Card {
    public static id: string = "ST05_016_250";
    
    public static _name: string = "Lion's Threat: Imperial Earth Bind";

    public effect: string = "[Main] DON!! -2: K.O. up to 1 of your opponent's cost 5 or lower Characters.\r\n[Trigger] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-016_3762d9_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "3";
    
    public getId() {
        return ST05_016_250.id
    }
    
    public getType() {
        return ST05_016_250.type
    }
    
    public getImage() {
        return ST05_016_250.image
    }
    
    public getName() {
        return ST05_016_250._name
    }
    
    public getCost(): number {
        return parseInt(ST05_016_250.cost)
    }
}
