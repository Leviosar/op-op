
import Card, { CardType } from "../entities/Card";

export default class P_028_534 extends Card {
    public static id: string = "P_028_534";
    
    public static _name: string = "Portgas. D. Ace";

    public effect: string = "<Double Attack> (The damage this character deals to your opponent's Leader becomes 2)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-013_89a520_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static archetypes: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_028_534.id;
    }
    
    public getType() : CardType {
        return P_028_534.type as CardType;
    }
    
    public getImage() {
        return P_028_534.image;
    }
    
    public getName() {
        return P_028_534._name;
    }
    
    public getCost(): number {
        return parseInt(P_028_534.cost);
    }
    
    public getKeywords(): string[] {
        return P_028_534.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_028_534.archetypes;
    }
    
    public getPower(): number {
        return P_028_534.power;
    }

    public getCounter(): number {
        return P_028_534.counter;
    }

    public getLife(): number {
        return P_028_534.life;
    }
}
