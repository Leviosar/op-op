
import Card, { CardType } from "../entities/Card";

export default class OP03_017_632 extends Card {
    public static id: string = "OP03_017_632";
    
    public static _name: string = "Cross Fire";

    public effect: string = "[Main] / [Counter] If your Leader has {Whitebeard Pirates} in its types, give up to 1 of your opponent's Characters -4000 Power during this turn.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-017_e86b78_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_017_632.id;
    }
    
    public getType() : CardType {
        return OP03_017_632.type as CardType;
    }
    
    public getImage() {
        return OP03_017_632.image;
    }
    
    public getName() {
        return OP03_017_632._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_017_632.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_017_632.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_017_632.archetypes;
    }
    
    public getPower(): number {
        return OP03_017_632.power;
    }

    public getCounter(): number {
        return OP03_017_632.counter;
    }

    public getLife(): number {
        return OP03_017_632.life;
    }
}
