
import Card from "../entities/Card";

export default class OP01_107_210 extends Card {
    public static id: string = "OP01_107_210";
    
    public static _name: string = "Bao Huang";

    public effect: string = "[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-107_c8ac00_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_107_210.id
    }
    
    public getType() {
        return OP01_107_210.type
    }
    
    public getImage() {
        return OP01_107_210.image
    }
    
    public getName() {
        return OP01_107_210._name
    }
    
    public getCost(): number {
        return parseInt(OP01_107_210.cost)
    }
}
