
import Card, { CardType } from "../entities/Card";

export default class P_012_267 extends Card {
    public static id: string = "P_012_267";
    
    public static _name: string = "Jellyfish Pirates";

    public effect: string = "";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-012_7cea29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["FILM","Jellyfish Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_012_267.id;
    }
    
    public getType() : CardType {
        return P_012_267.type as CardType;
    }
    
    public getImage() {
        return P_012_267.image;
    }
    
    public getName() {
        return P_012_267._name;
    }
    
    public getCost(): number {
        return parseInt(P_012_267.cost);
    }
    
    public getKeywords(): string[] {
        return P_012_267.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_012_267.archetypes;
    }
    
    public getPower(): number {
        return P_012_267.power;
    }

    public getCounter(): number {
        return P_012_267.counter;
    }

    public getLife(): number {
        return P_012_267.life;
    }
}
