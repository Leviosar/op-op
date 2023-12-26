
import Card, { CardType } from "../entities/Card";

export default class ST10_008_894 extends Card {
    public static id: string = "ST10_008_894";
    
    public static _name: string = "Shachi & Penguin";

    public effect: string = "[On Play] If you have 3 or less DON!! cards on your field, add up to 2 DON!! cards from your DON!! deck and rest them.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-008_adcea7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Heart Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_008_894.id;
    }
    
    public getType() : CardType {
        return ST10_008_894.type as CardType;
    }
    
    public getImage() {
        return ST10_008_894.image;
    }
    
    public getName() {
        return ST10_008_894._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_008_894.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_008_894.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_008_894.archetypes;
    }
    
    public getPower(): number {
        return ST10_008_894.power;
    }

    public getCounter(): number {
        return ST10_008_894.counter;
    }

    public getLife(): number {
        return ST10_008_894.life;
    }
}
