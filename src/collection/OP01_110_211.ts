
import Card from "../entities/Card";

export default class OP01_110_211 extends Card {
    public static id: string = "OP01_110_211";
    
    public static _name: string = "Bao Huang";

    public effect: string = "[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-110_698bc8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP01_110_211.id
    }
    
    public getType() {
        return OP01_110_211.type
    }
    
    public getImage() {
        return OP01_110_211.image
    }
    
    public getName() {
        return OP01_110_211._name
    }
    
    public getCost(): number {
        return parseInt(OP01_110_211.cost)
    }
}
