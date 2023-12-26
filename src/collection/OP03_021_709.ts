
import Card, { CardType } from "../entities/Card";

export default class OP03_021_709 extends Card {
    public static id: string = "OP03_021_709";
    
    public static _name: string = "Kuro";

    public effect: string = "[Activate:Main] (3), you may rest 2 Characters with the {East Blue} type: Set this Leader to active and rest up to 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-021_551916_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["East Blue","Black Cat Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP03_021_709.id;
    }
    
    public getType() : CardType {
        return OP03_021_709.type as CardType;
    }
    
    public getImage() {
        return OP03_021_709.image;
    }
    
    public getName() {
        return OP03_021_709._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_021_709.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_021_709.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_021_709.archetypes;
    }
    
    public getPower(): number {
        return OP03_021_709.power;
    }

    public getCounter(): number {
        return OP03_021_709.counter;
    }

    public getLife(): number {
        return OP03_021_709.life;
    }
}
