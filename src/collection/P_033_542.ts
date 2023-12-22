
import Card from "../entities/Card";

export default class P_033_542 extends Card {
    public static id: string = "P_033_542";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[Activate: Main] You may return this Character to the bottom of its owner's deck: Draw 1 card.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-033_83c4e7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return P_033_542.id
    }
    
    public getType() {
        return P_033_542.type
    }
    
    public getImage() {
        return P_033_542.image
    }
    
    public getName() {
        return P_033_542._name
    }
    
    public getCost(): number {
        return parseInt(P_033_542.cost)
    }
}
