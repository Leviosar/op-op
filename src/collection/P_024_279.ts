
import Card, { CardType } from "../entities/Card";

export default class P_024_279 extends Card {
    public static id: string = "P_024_279";
    
    public static _name: string = "I will become the Pirate King!!!!";

    public effect: string = "[Main] Your leader gets +1000 power during this turn for each of your Characters.\r\n[Trigger] Your leader or 1 of your Characters gets +1000 power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-024_96fafd_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_024_279.id;
    }
    
    public getType() : CardType {
        return P_024_279.type as CardType;
    }
    
    public getImage() {
        return P_024_279.image;
    }
    
    public getName() {
        return P_024_279._name;
    }
    
    public getCost(): number {
        return parseInt(P_024_279.cost);
    }
    
    public getKeywords(): string[] {
        return P_024_279.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_024_279.archetypes;
    }
    
    public getPower(): number {
        return P_024_279.power;
    }

    public getCounter(): number {
        return P_024_279.counter;
    }

    public getLife(): number {
        return P_024_279.life;
    }
}
