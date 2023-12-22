
import Card from "../entities/Card";

export default class ST05_007_251 extends Card {
    public static id: string = "ST05_007_251";
    
    public static _name: string = "Lion's Threat: Imperial Earth Bind";

    public effect: string = "[Main] DON!! -2: K.O. up to 1 of your opponent's cost 5 or lower Characters.\r\n[Trigger] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-007_8a746a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST05_007_251.id
    }
    
    public getType() {
        return ST05_007_251.type
    }
    
    public getImage() {
        return ST05_007_251.image
    }
    
    public getName() {
        return ST05_007_251._name
    }
    
    public getCost(): number {
        return parseInt(ST05_007_251.cost)
    }
}
