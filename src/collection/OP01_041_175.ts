
import Card from "../entities/Card";

export default class OP01_041_175 extends Card {
    public static id: string = "OP01_041_175";
    
    public static _name: string = "Kozuki Momonosuke";

    public effect: string = "[Activate: Main] (1) (You may rest the specified number of DON!! cards in your cost area) You may rest this Character: Look at 5 cards from the top of your deck; reveal 1 {Wano Country} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-041_ff97ab_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_041_175.id
    }
    
    public getType() {
        return OP01_041_175.type
    }
    
    public getImage() {
        return OP01_041_175.image
    }
    
    public getName() {
        return OP01_041_175._name
    }
}
