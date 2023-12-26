
import Card, { CardType } from "../entities/Card";

export default class OP03_039_647 extends Card {
    public static id: string = "OP03_039_647";
    
    public static _name: string = "One Two Django";

    public effect: string = "[Main] Rest up to 1 of your opponent's Characters with a cost of 1 or less. Then, up to 1 of your Characters gains +1000 Power during this turn.\r\n\r\n[Trigger] Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-039_9f663e_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Black Cat Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_039_647.id;
    }
    
    public getType() : CardType {
        return OP03_039_647.type as CardType;
    }
    
    public getImage() {
        return OP03_039_647.image;
    }
    
    public getName() {
        return OP03_039_647._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_039_647.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_039_647.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_039_647.archetypes;
    }
    
    public getPower(): number {
        return OP03_039_647.power;
    }

    public getCounter(): number {
        return OP03_039_647.counter;
    }

    public getLife(): number {
        return OP03_039_647.life;
    }
}
