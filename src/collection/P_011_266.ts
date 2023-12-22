
import Card from "../entities/Card";

export default class P_011_266 extends Card {
    public static id: string = "P_011_266";
    
    public static _name: string = "Uta";

    public effect: string = "[Activate: Main] [Once per turn] (1) (You may rest the designated number for DON!! in your Cost Area): Up to 1 of your Characters without effects gain +2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-011_dae822_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return P_011_266.id
    }
    
    public getType() {
        return P_011_266.type
    }
    
    public getImage() {
        return P_011_266.image
    }
    
    public getName() {
        return P_011_266._name
    }
    
    public getCost(): number {
        return parseInt(P_011_266.cost)
    }
}
