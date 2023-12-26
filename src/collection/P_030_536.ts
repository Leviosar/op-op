
import Card, { CardType } from "../entities/Card";

export default class P_030_536 extends Card {
    public static id: string = "P_030_536";
    
    public static _name: string = "Jinbe";

    public effect: string = "[On K.O] Place up to 1 Character with a cost of 3 or less at the bottom of the owner's deck.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-030_c4d170_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Fish-Man","The Seven Warlords of the Sea","Sun Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return P_030_536.id;
    }
    
    public getType() : CardType {
        return P_030_536.type as CardType;
    }
    
    public getImage() {
        return P_030_536.image;
    }
    
    public getName() {
        return P_030_536._name;
    }
    
    public getCost(): number {
        return parseInt(P_030_536.cost);
    }
    
    public getKeywords(): string[] {
        return P_030_536.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_030_536.archetypes;
    }
    
    public getPower(): number {
        return P_030_536.power;
    }

    public getCounter(): number {
        return P_030_536.counter;
    }

    public getLife(): number {
        return P_030_536.life;
    }
}
