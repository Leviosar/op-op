
import Card, { CardType } from "../entities/Card";

export default class P_035_788 extends Card {
    public static id: string = "P_035_788";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x1] [When Attacking] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a Cost of 0.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-035_f4351d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_035_788.id;
    }
    
    public getType() : CardType {
        return P_035_788.type as CardType;
    }
    
    public getImage() {
        return P_035_788.image;
    }
    
    public getName() {
        return P_035_788._name;
    }
    
    public getCost(): number {
        return parseInt(P_035_788.cost);
    }
    
    public getKeywords(): string[] {
        return P_035_788.keywords;
    }
    
    public getPower(): number {
        return P_035_788.power;
    }

    public getCounter(): number {
        return P_035_788.counter;
    }

    public getLife(): number {
        return P_035_788.life;
    }
}
