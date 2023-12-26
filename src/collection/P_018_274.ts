
import Card, { CardType } from "../entities/Card";

export default class P_018_274 extends Card {
    public static id: string = "P_018_274";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-018_c98b74_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["FILM","Supernovas","Barto Club"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_018_274.id;
    }
    
    public getType() : CardType {
        return P_018_274.type as CardType;
    }
    
    public getImage() {
        return P_018_274.image;
    }
    
    public getName() {
        return P_018_274._name;
    }
    
    public getCost(): number {
        return parseInt(P_018_274.cost);
    }
    
    public getKeywords(): string[] {
        return P_018_274.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_018_274.archetypes;
    }
    
    public getPower(): number {
        return P_018_274.power;
    }

    public getCounter(): number {
        return P_018_274.counter;
    }

    public getLife(): number {
        return P_018_274.life;
    }
}
