
import Card from "../entities/Card";

export default class P_029_535 extends Card {
    public static id: string = "P_029_535";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "[End of Your Turn] You may rest this Character: Set up to 1 of your {FILM} type Characters other than [Bartolomeo] as active.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-029_6c3cf8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_029_535.id
    }
    
    public getType() {
        return P_029_535.type
    }
    
    public getImage() {
        return P_029_535.image
    }
    
    public getName() {
        return P_029_535._name
    }
}
