
import Card from "../entities/Card";

export default class ST05_011_232 extends Card {
    public static id: string = "ST05_011_232";
    
    public static _name: string = "Douglass Bullet";

    public effect: string = "[Activate: Main] [Once per turn] DON!! -4: Rest up to 2 of your opponent's cost 6 or lower Characters. Then, this Character gains <Double Attack> during this turn.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-011_997af6_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "8";
    
    public getId() {
        return ST05_011_232.id
    }
    
    public getType() {
        return ST05_011_232.type
    }
    
    public getImage() {
        return ST05_011_232.image
    }
    
    public getName() {
        return ST05_011_232._name
    }
    
    public getCost(): number {
        return parseInt(ST05_011_232.cost)
    }
}
