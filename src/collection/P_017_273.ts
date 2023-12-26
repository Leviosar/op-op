
import Card, { CardType } from "../entities/Card";

export default class P_017_273 extends Card {
    public static id: string = "P_017_273";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Up to 1 of your opponent's Characters lose -2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-017_c8589d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Supernovas","Heart Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_017_273.id;
    }
    
    public getType() : CardType {
        return P_017_273.type as CardType;
    }
    
    public getImage() {
        return P_017_273.image;
    }
    
    public getName() {
        return P_017_273._name;
    }
    
    public getCost(): number {
        return parseInt(P_017_273.cost);
    }
    
    public getKeywords(): string[] {
        return P_017_273.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_017_273.archetypes;
    }
    
    public getPower(): number {
        return P_017_273.power;
    }

    public getCounter(): number {
        return P_017_273.counter;
    }

    public getLife(): number {
        return P_017_273.life;
    }
}
