
import Card, { CardType } from "../entities/Card";

export default class P_029_535 extends Card {
    public static id: string = "P_029_535";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "[End of Your Turn] You may rest this Character: Set up to 1 of your {FILM} type Characters other than [Bartolomeo] as active.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-029_6c3cf8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_029_535.id;
    }
    
    public getType() : CardType {
        return P_029_535.type as CardType;
    }
    
    public getImage() {
        return P_029_535.image;
    }
    
    public getName() {
        return P_029_535._name;
    }
    
    public getCost(): number {
        return parseInt(P_029_535.cost);
    }
    
    public getKeywords(): string[] {
        return P_029_535.keywords;
    }
    
    public getPower(): number {
        return P_029_535.power;
    }

    public getCounter(): number {
        return P_029_535.counter;
    }

    public getLife(): number {
        return P_029_535.life;
    }
}
