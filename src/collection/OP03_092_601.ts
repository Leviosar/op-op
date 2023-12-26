
import Card, { CardType } from "../entities/Card";

export default class OP03_092_601 extends Card {
    public static id: string = "OP03_092_601";
    
    public static _name: string = "Rob Lucci";

    public effect: string = "[On Play] You may return 2 cards with a type including \"CP\" from your trash to the bottom of your deck in any order: This Character gains <Rush> for the turn";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-092_657d25_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetypes: string[] = ["CP9"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_092_601.id;
    }
    
    public getType() : CardType {
        return OP03_092_601.type as CardType;
    }
    
    public getImage() {
        return OP03_092_601.image;
    }
    
    public getName() {
        return OP03_092_601._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_092_601.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_092_601.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_092_601.archetypes;
    }
    
    public getPower(): number {
        return OP03_092_601.power;
    }

    public getCounter(): number {
        return OP03_092_601.counter;
    }

    public getLife(): number {
        return OP03_092_601.life;
    }
}
