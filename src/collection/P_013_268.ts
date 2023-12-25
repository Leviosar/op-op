
import Card, { CardType } from "../entities/Card";

export default class P_013_268 extends Card {
    public static id: string = "P_013_268";
    
    public static _name: string = "Gordon";

    public effect: string = "[Activate: Main] You can return this card to the bottom of the deck: Up to 1 of your opponent's Characters loses -3000 Power during this turn";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-013_177e05_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_013_268.id;
    }
    
    public getType() : CardType {
        return P_013_268.type as CardType;
    }
    
    public getImage() {
        return P_013_268.image;
    }
    
    public getName() {
        return P_013_268._name;
    }
    
    public getCost(): number {
        return parseInt(P_013_268.cost);
    }
    
    public getKeywords(): string[] {
        return P_013_268.keywords;
    }
    
    public getPower(): number {
        return P_013_268.power;
    }

    public getCounter(): number {
        return P_013_268.counter;
    }

    public getLife(): number {
        return P_013_268.life;
    }
}
