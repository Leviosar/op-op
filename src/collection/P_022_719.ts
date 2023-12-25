
import Card, { CardType } from "../entities/Card";

export default class P_022_719 extends Card {
    public static id: string = "P_022_719";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: Up to 1 of this Character and your Leader gains +1000 power for this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-022_43ad39_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_022_719.id;
    }
    
    public getType() : CardType {
        return P_022_719.type as CardType;
    }
    
    public getImage() {
        return P_022_719.image;
    }
    
    public getName() {
        return P_022_719._name;
    }
    
    public getCost(): number {
        return parseInt(P_022_719.cost);
    }
    
    public getKeywords(): string[] {
        return P_022_719.keywords;
    }
    
    public getPower(): number {
        return P_022_719.power;
    }

    public getCounter(): number {
        return P_022_719.counter;
    }

    public getLife(): number {
        return P_022_719.life;
    }
}
