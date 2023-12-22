
import Card from "../entities/Card";

export default class P_027_333 extends Card {
    public static id: string = "P_027_333";
    
    public static _name: string = "Franky Shogun";

    public effect: string = "This cards name is also treated as [Franky]\r\n[Opponent's Turn] All your Characters with a printed power of 3000 or less gain +1000 power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-027_88985f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return P_027_333.id
    }
    
    public getType() {
        return P_027_333.type
    }
    
    public getImage() {
        return P_027_333.image
    }
    
    public getName() {
        return P_027_333._name
    }
    
    public getCost(): number {
        return parseInt(P_027_333.cost)
    }
}
