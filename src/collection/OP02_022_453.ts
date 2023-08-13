
import Card from "../entities/Card";

export default class OP02_022_453 extends Card {
    public static id: string = "OP02_022_453";
    
    public static _name: string = "Whitebeard Pirates";

    public effect: string = "[Main] Look at 5 cards from the top of your deck; reveal up to 1 Character card with a type including \"Whitebeard Pirates\" and add it to your hand. Then, place the rest at the bottom of your deck in any order.\r\n[Trigger]: Activate this card's Main effect.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-022_983120_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_022_453.id
    }
    
    public getType() {
        return OP02_022_453.type
    }
    
    public getImage() {
        return OP02_022_453.image
    }
    
    public getName() {
        return OP02_022_453._name
    }
}
