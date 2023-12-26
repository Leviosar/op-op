
import Card, { CardType } from "../entities/Card";

export default class OP03_122_714 extends Card {
    public static id: string = "OP03_122_714";
    
    public static _name: string = "Sogeking";

    public effect: string = "This Character is also called \"Usopp\"\r\n[On Play] Return a Character that costs 6 or less to their owner's hand. Then, draw 2 cards and trash 2 cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-122_df3093_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Sniper Island"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_122_714.id;
    }
    
    public getType() : CardType {
        return OP03_122_714.type as CardType;
    }
    
    public getImage() {
        return OP03_122_714.image;
    }
    
    public getName() {
        return OP03_122_714._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_122_714.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_122_714.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_122_714.archetypes;
    }
    
    public getPower(): number {
        return OP03_122_714.power;
    }

    public getCounter(): number {
        return OP03_122_714.counter;
    }

    public getLife(): number {
        return OP03_122_714.life;
    }
}
