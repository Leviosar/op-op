
import Card, { CardType } from "../entities/Card";

export default class DON_gold_261 extends Card {
    public static id: string = "DON_gold_261";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "Your Turn +1000";
    
    public source: string = "Misc [MISC]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/DON-gold_b97ce0_jp.jpg";
    
    public static type: CardType = "don";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return DON_gold_261.id;
    }
    
    public getType() : CardType {
        return DON_gold_261.type as CardType;
    }
    
    public getImage() {
        return DON_gold_261.image;
    }
    
    public getName() {
        return DON_gold_261._name;
    }
    
    public getCost(): number {
        return parseInt(DON_gold_261.cost);
    }
    
    public getKeywords(): string[] {
        return DON_gold_261.keywords;
    }
    
    public getArchetypes(): string[] {
        return DON_gold_261.archetypes;
    }
    
    public getPower(): number {
        return DON_gold_261.power;
    }

    public getCounter(): number {
        return DON_gold_261.counter;
    }

    public getLife(): number {
        return DON_gold_261.life;
    }
}
