
import Card, { CardType } from "../entities/Card";

export default class OP03_043_649 extends Card {
    public static id: string = "OP03_043_649";
    
    public static _name: string = "Gaimon";

    public effect: string = "When you deal damage to your opponent's Life, you may trash the top 3 cards of your deck. If you do, place this Character in the trash.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-043_e2ab85_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_043_649.id;
    }
    
    public getType() : CardType {
        return OP03_043_649.type as CardType;
    }
    
    public getImage() {
        return OP03_043_649.image;
    }
    
    public getName() {
        return OP03_043_649._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_043_649.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_043_649.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_043_649.archetypes;
    }
    
    public getPower(): number {
        return OP03_043_649.power;
    }

    public getCounter(): number {
        return OP03_043_649.counter;
    }

    public getLife(): number {
        return OP03_043_649.life;
    }
}
