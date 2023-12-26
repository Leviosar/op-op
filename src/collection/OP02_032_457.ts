
import Card, { CardType } from "../entities/Card";

export default class OP02_032_457 extends Card {
    public static id: string = "OP02_032_457";
    
    public static _name: string = "Shishilian";

    public effect: string = "[On Play] (2) (You may rest the specified number of DON!! cards in your cost area.): Set up to 1 of your {Minks} type Characters with a cost of 5 or less as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-032_75ddae_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_032_457.id;
    }
    
    public getType() : CardType {
        return OP02_032_457.type as CardType;
    }
    
    public getImage() {
        return OP02_032_457.image;
    }
    
    public getName() {
        return OP02_032_457._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_032_457.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_032_457.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_032_457.archetypes;
    }
    
    public getPower(): number {
        return OP02_032_457.power;
    }

    public getCounter(): number {
        return OP02_032_457.counter;
    }

    public getLife(): number {
        return OP02_032_457.life;
    }
}
