
import Card, { CardType } from "../entities/Card";

export default class OP02_064_309 extends Card {
    public static id: string = "OP02_064_309";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[DON!! x1] [When attacking] You may trash 1 card from your hand: Return up to 1 cost 2 or lower Character to the bottom of its owner's deck. Then, when this battle ends, return this Character to the bottom of its owner's deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-064_8ec7ff_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down","Former Baroque Works"];
    
    public static power: number = 5000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_064_309.id;
    }
    
    public getType() : CardType {
        return OP02_064_309.type as CardType;
    }
    
    public getImage() {
        return OP02_064_309.image;
    }
    
    public getName() {
        return OP02_064_309._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_064_309.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_064_309.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_064_309.archetypes;
    }
    
    public getPower(): number {
        return OP02_064_309.power;
    }

    public getCounter(): number {
        return OP02_064_309.counter;
    }

    public getLife(): number {
        return OP02_064_309.life;
    }
}
