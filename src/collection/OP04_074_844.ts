
import Card, { CardType } from "../entities/Card";

export default class OP04_074_844 extends Card {
    public static id: string = "OP04_074_844";
    
    public static _name: string = "Colors Trap";

    public effect: string = "[Counter] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader or Character cards gains +1000 power during this battle. Then, rest up to 1 of your opponent's Characters with a cost of 4 or less.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-074_8be1fc_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Baroque Works"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_074_844.id;
    }
    
    public getType() : CardType {
        return OP04_074_844.type as CardType;
    }
    
    public getImage() {
        return OP04_074_844.image;
    }
    
    public getName() {
        return OP04_074_844._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_074_844.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_074_844.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_074_844.archetypes;
    }
    
    public getPower(): number {
        return OP04_074_844.power;
    }

    public getCounter(): number {
        return OP04_074_844.counter;
    }

    public getLife(): number {
        return OP04_074_844.life;
    }
}
