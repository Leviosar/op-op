
import Card from "../entities/Card";

export default class OP01_105_209 extends Card {
    public static id: string = "OP01_105_209";
    
    public static _name: string = "Bao Huang";

    public effect: string = "[On Play] Choose 2 cards from your opponent's hand; your opponent reveals those cards.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-105_6182ff_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_105_209.id
    }
    
    public getType() {
        return OP01_105_209.type
    }
    
    public getImage() {
        return OP01_105_209.image
    }
    
    public getName() {
        return OP01_105_209._name
    }
}
