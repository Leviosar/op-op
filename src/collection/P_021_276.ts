
import Card, { CardType } from "../entities/Card";

export default class P_021_276 extends Card {
    public static id: string = "P_021_276";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-021_ef259c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_021_276.id;
    }
    
    public getType() : CardType {
        return P_021_276.type as CardType;
    }
    
    public getImage() {
        return P_021_276.image;
    }
    
    public getName() {
        return P_021_276._name;
    }
    
    public getCost(): number {
        return parseInt(P_021_276.cost);
    }
    
    public getKeywords(): string[] {
        return P_021_276.keywords;
    }
    
    public getPower(): number {
        return P_021_276.power;
    }

    public getCounter(): number {
        return P_021_276.counter;
    }

    public getLife(): number {
        return P_021_276.life;
    }
}
