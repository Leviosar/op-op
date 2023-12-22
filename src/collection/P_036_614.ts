
import Card from "../entities/Card";

export default class P_036_614 extends Card {
    public static id: string = "P_036_614";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: Up to 1 of this Character and your Leader gains +1000 power for this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-036_166f1a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return P_036_614.id
    }
    
    public getType() {
        return P_036_614.type
    }
    
    public getImage() {
        return P_036_614.image
    }
    
    public getName() {
        return P_036_614._name
    }
    
    public getCost(): number {
        return parseInt(P_036_614.cost)
    }
}
