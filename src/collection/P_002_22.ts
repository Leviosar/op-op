
import Card, { CardType } from "../entities/Card";

export default class P_002_22 extends Card {
    public static id: string = "P_002_22";
    
    public static _name: string = "I Smell Adventure Ahead";

    public effect: string = "[Main] Shuffle your hand into your deck. Then, draw a card for each card shuffled this way.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-002_130c0a_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_002_22.id;
    }
    
    public getType() : CardType {
        return P_002_22.type as CardType;
    }
    
    public getImage() {
        return P_002_22.image;
    }
    
    public getName() {
        return P_002_22._name;
    }
    
    public getCost(): number {
        return parseInt(P_002_22.cost);
    }
    
    public getKeywords(): string[] {
        return P_002_22.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_002_22.archetypes;
    }
    
    public getPower(): number {
        return P_002_22.power;
    }

    public getCounter(): number {
        return P_002_22.counter;
    }

    public getLife(): number {
        return P_002_22.life;
    }
}
