
import Card, { CardType } from "../entities/Card";

export default class P_039_791 extends Card {
    public static id: string = "P_039_791";
    
    public static _name: string = "Bellamy";

    public effect: string = "<Banish>\r\n[DON!! x2] If you have 0 Life, this Character gains +2000 Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-039_b108c8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Banish"];
    
    public static archetypes: string[] = ["Bellamy Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_039_791.id;
    }
    
    public getType() : CardType {
        return P_039_791.type as CardType;
    }
    
    public getImage() {
        return P_039_791.image;
    }
    
    public getName() {
        return P_039_791._name;
    }
    
    public getCost(): number {
        return parseInt(P_039_791.cost);
    }
    
    public getKeywords(): string[] {
        return P_039_791.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_039_791.archetypes;
    }
    
    public getPower(): number {
        return P_039_791.power;
    }

    public getCounter(): number {
        return P_039_791.counter;
    }

    public getLife(): number {
        return P_039_791.life;
    }
}
