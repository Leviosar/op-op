
import Card, { CardType } from "../entities/Card";

export default class P_003_345 extends Card {
    public static id: string = "P_003_345";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "[DON!! x2] This character gains <Double Attack> (The damage this character deals to your opponent's Leader becomes 2)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-003_393182_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static archetypes: string[] = ["Supernovas","Kid Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_003_345.id;
    }
    
    public getType() : CardType {
        return P_003_345.type as CardType;
    }
    
    public getImage() {
        return P_003_345.image;
    }
    
    public getName() {
        return P_003_345._name;
    }
    
    public getCost(): number {
        return parseInt(P_003_345.cost);
    }
    
    public getKeywords(): string[] {
        return P_003_345.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_003_345.archetypes;
    }
    
    public getPower(): number {
        return P_003_345.power;
    }

    public getCounter(): number {
        return P_003_345.counter;
    }

    public getLife(): number {
        return P_003_345.life;
    }
}
