
import Card, { CardType } from "../entities/Card";

export default class P_006_134 extends Card {
    public static id: string = "P_006_134";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] [Your Turn] This Character gains +2000 Power.\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-006_463c9b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return P_006_134.id;
    }
    
    public getType() : CardType {
        return P_006_134.type as CardType;
    }
    
    public getImage() {
        return P_006_134.image;
    }
    
    public getName() {
        return P_006_134._name;
    }
    
    public getCost(): number {
        return parseInt(P_006_134.cost);
    }
    
    public getKeywords(): string[] {
        return P_006_134.keywords;
    }
    
    public getPower(): number {
        return P_006_134.power;
    }

    public getCounter(): number {
        return P_006_134.counter;
    }

    public getLife(): number {
        return P_006_134.life;
    }
}
