
import Card from "../entities/Card";

export default class ST05_005_228 extends Card {
    public static id: string = "ST05_005_228";
    
    public static _name: string = "Carina";

    public effect: string = "[Activate: Main] [Once Per Turn] Rest this Character, you may send one <FILM> type card from your hand to the trash: If your opponent has more DON!! cards on their field than you, add 2 cards from your DON!! deck and set it as rested.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-005_a000ba_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST05_005_228.id
    }
    
    public getType() {
        return ST05_005_228.type
    }
    
    public getImage() {
        return ST05_005_228.image
    }
    
    public getName() {
        return ST05_005_228._name
    }
    
    public getCost(): number {
        return parseInt(ST05_005_228.cost)
    }
}
