
import Card, { CardType } from "../entities/Card";

export default class P_010_226 extends Card {
    public static id: string = "P_010_226";
    
    public static _name: string = "Kaido";

    public effect: string = "[End of your turn] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-010_353d29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Four Emperors","Animal Kingdom Pirates"];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_010_226.id;
    }
    
    public getType() : CardType {
        return P_010_226.type as CardType;
    }
    
    public getImage() {
        return P_010_226.image;
    }
    
    public getName() {
        return P_010_226._name;
    }
    
    public getCost(): number {
        return parseInt(P_010_226.cost);
    }
    
    public getKeywords(): string[] {
        return P_010_226.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_010_226.archetypes;
    }
    
    public getPower(): number {
        return P_010_226.power;
    }

    public getCounter(): number {
        return P_010_226.counter;
    }

    public getLife(): number {
        return P_010_226.life;
    }
}
