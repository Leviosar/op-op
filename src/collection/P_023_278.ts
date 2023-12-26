
import Card, { CardType } from "../entities/Card";

export default class P_023_278 extends Card {
    public static id: string = "P_023_278";
    
    public static _name: string = "Yasopp";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-023_4ba795_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_023_278.id;
    }
    
    public getType() : CardType {
        return P_023_278.type as CardType;
    }
    
    public getImage() {
        return P_023_278.image;
    }
    
    public getName() {
        return P_023_278._name;
    }
    
    public getCost(): number {
        return parseInt(P_023_278.cost);
    }
    
    public getKeywords(): string[] {
        return P_023_278.keywords;
    }
    
    public getPower(): number {
        return P_023_278.power;
    }

    public getCounter(): number {
        return P_023_278.counter;
    }

    public getLife(): number {
        return P_023_278.life;
    }
}
