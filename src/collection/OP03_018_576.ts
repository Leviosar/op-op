
import Card, { CardType } from "../entities/Card";

export default class OP03_018_576 extends Card {
    public static id: string = "OP03_018_576";
    
    public static _name: string = "Fire Fist";

    public effect: string = "[Main] You may discard 1 Event from your hand: K.O. up to 1 of your opponent's Characters with 5000 Power or less and up to 1 of your opponent's Characters with 4000  Power or less.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with 5000 Power or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-018_653358_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_018_576.id;
    }
    
    public getType() : CardType {
        return OP03_018_576.type as CardType;
    }
    
    public getImage() {
        return OP03_018_576.image;
    }
    
    public getName() {
        return OP03_018_576._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_018_576.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_018_576.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_018_576.archetypes;
    }
    
    public getPower(): number {
        return OP03_018_576.power;
    }

    public getCounter(): number {
        return OP03_018_576.counter;
    }

    public getLife(): number {
        return OP03_018_576.life;
    }
}
