
import Card from "../entities/Card";

export default class OP04_002_797 extends Card {
    public static id: string = "OP04_002_797";
    
    public static _name: string = "Igaram";

    public effect: string = "[Activate: Main] You may rest this Character and give your 1 active Leader −5000 power during this turn: Look at 5 cards from the top of your deck; reveal up to 1 {Alabasta} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-002_03c7fb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_002_797.id
    }
    
    public getType() {
        return OP04_002_797.type
    }
    
    public getImage() {
        return OP04_002_797.image
    }
    
    public getName() {
        return OP04_002_797._name
    }
}
