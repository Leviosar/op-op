
import Card from "../entities/Card";

export default class ST05_004_138 extends Card {
    public static id: string = "ST05_004_138";
    
    public static _name: string = "Uta";

    public effect: string = "<Blocker>\r\n[On Block] DON!!-1: Rest up to 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-004_59ebac_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST05_004_138.id
    }
    
    public getType() {
        return ST05_004_138.type
    }
    
    public getImage() {
        return ST05_004_138.image
    }
    
    public getName() {
        return ST05_004_138._name
    }
    
    public getCost(): number {
        return parseInt(ST05_004_138.cost)
    }
}