
import Card, { CardType } from "../entities/Card";

export default class P_011_266 extends Card {
    public static id: string = "P_011_266";
    
    public static _name: string = "Uta";

    public effect: string = "[Activate: Main] [Once per turn] (1) (You may rest the designated number for DON!! in your Cost Area): Up to 1 of your Characters without effects gain +2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-011_dae822_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_011_266.id;
    }
    
    public getType() : CardType {
        return P_011_266.type as CardType;
    }
    
    public getImage() {
        return P_011_266.image;
    }
    
    public getName() {
        return P_011_266._name;
    }
    
    public getCost(): number {
        return parseInt(P_011_266.cost);
    }
    
    public getKeywords(): string[] {
        return P_011_266.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_011_266.archetypes;
    }
    
    public getPower(): number {
        return P_011_266.power;
    }

    public getCounter(): number {
        return P_011_266.counter;
    }

    public getLife(): number {
        return P_011_266.life;
    }
}
