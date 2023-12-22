
import Card from "../entities/Card";

export default class P_025_299 extends Card {
    public static id: string = "P_025_299";
    
    public static _name: string = "Smoker";

    public effect: string = "[DON!!x1] This character can't be K.O.'d when battling Characters without (Special) attribute.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-025_6363f4_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return P_025_299.id
    }
    
    public getType() {
        return P_025_299.type
    }
    
    public getImage() {
        return P_025_299.image
    }
    
    public getName() {
        return P_025_299._name
    }
    
    public getCost(): number {
        return parseInt(P_025_299.cost)
    }
}
