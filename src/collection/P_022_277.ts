
import Card, { CardType } from "../entities/Card";

export default class P_022_277 extends Card {
    public static id: string = "P_022_277";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-022_736355_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Supernovas","Straw Hat Crew"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_022_277.id;
    }
    
    public getType() : CardType {
        return P_022_277.type as CardType;
    }
    
    public getImage() {
        return P_022_277.image;
    }
    
    public getName() {
        return P_022_277._name;
    }
    
    public getCost(): number {
        return parseInt(P_022_277.cost);
    }
    
    public getKeywords(): string[] {
        return P_022_277.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_022_277.archetypes;
    }
    
    public getPower(): number {
        return P_022_277.power;
    }

    public getCounter(): number {
        return P_022_277.counter;
    }

    public getLife(): number {
        return P_022_277.life;
    }
}
