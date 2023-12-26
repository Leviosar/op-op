
import Card, { CardType } from "../entities/Card";

export default class OP02_068_328 extends Card {
    public static id: string = "OP02_068_328";
    
    public static _name: string = "Gum Gum Rain";

    public effect: string = "[Counter] You may trash 1 card from your hand: Up to 1 of your Characters or Leader, +3000 power for this battle.\r\n[Trigger] Return up to 1 Character that costs 2 or less to their owner's hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-068_9c6769_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "0";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down","Straw Hat Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_068_328.id;
    }
    
    public getType() : CardType {
        return OP02_068_328.type as CardType;
    }
    
    public getImage() {
        return OP02_068_328.image;
    }
    
    public getName() {
        return OP02_068_328._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_068_328.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_068_328.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_068_328.archetypes;
    }
    
    public getPower(): number {
        return OP02_068_328.power;
    }

    public getCounter(): number {
        return OP02_068_328.counter;
    }

    public getLife(): number {
        return OP02_068_328.life;
    }
}
