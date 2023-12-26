
import Card, { CardType } from "../entities/Card";

export default class OP04_076_846 extends Card {
    public static id: string = "OP04_076_846";
    
    public static _name: string = "Weakness... Is an Unforgivable Sin.";

    public effect: string = "[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader or Character cards gains +1000 power during this turn.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-076_f12861_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Seven Warlords of the Sea","Baroque Works"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_076_846.id;
    }
    
    public getType() : CardType {
        return OP04_076_846.type as CardType;
    }
    
    public getImage() {
        return OP04_076_846.image;
    }
    
    public getName() {
        return OP04_076_846._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_076_846.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_076_846.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_076_846.archetypes;
    }
    
    public getPower(): number {
        return OP04_076_846.power;
    }

    public getCounter(): number {
        return OP04_076_846.counter;
    }

    public getLife(): number {
        return OP04_076_846.life;
    }
}
