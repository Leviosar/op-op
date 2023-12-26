
import Card, { CardType } from "../entities/Card";

export default class OP03_120_702 extends Card {
    public static id: string = "OP03_120_702";
    
    public static _name: string = "Tropical Torment";

    public effect: string = "[Main] If your opponent has 4 or more Life, place up to 1 card from the top of your opponent’s Life in the trash.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-120_d7cb40_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Big Mom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_120_702.id;
    }
    
    public getType() : CardType {
        return OP03_120_702.type as CardType;
    }
    
    public getImage() {
        return OP03_120_702.image;
    }
    
    public getName() {
        return OP03_120_702._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_120_702.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_120_702.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_120_702.archetypes;
    }
    
    public getPower(): number {
        return OP03_120_702.power;
    }

    public getCounter(): number {
        return OP03_120_702.counter;
    }

    public getLife(): number {
        return OP03_120_702.life;
    }
}
