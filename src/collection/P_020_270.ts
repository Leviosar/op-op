
import Card, { CardType } from "../entities/Card";

export default class P_020_270 extends Card {
    public static id: string = "P_020_270";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] Your Leader or up to 1 of your Characters gains +1000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-020_25336e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Navy"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_020_270.id;
    }
    
    public getType() : CardType {
        return P_020_270.type as CardType;
    }
    
    public getImage() {
        return P_020_270.image;
    }
    
    public getName() {
        return P_020_270._name;
    }
    
    public getCost(): number {
        return parseInt(P_020_270.cost);
    }
    
    public getKeywords(): string[] {
        return P_020_270.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_020_270.archetypes;
    }
    
    public getPower(): number {
        return P_020_270.power;
    }

    public getCounter(): number {
        return P_020_270.counter;
    }

    public getLife(): number {
        return P_020_270.life;
    }
}
