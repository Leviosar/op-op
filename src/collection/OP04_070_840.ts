
import Card, { CardType } from "../entities/Card";

export default class OP04_070_840 extends Card {
    public static id: string = "OP04_070_840";
    
    public static _name: string = "Mr.3(Galdino)";

    public effect: string = "[On Your Opponent's Attack] [Once Per Turn] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Give up to 1 of your opponent's Characters −1000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-070_c2f767_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Baroque Works"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_070_840.id;
    }
    
    public getType() : CardType {
        return OP04_070_840.type as CardType;
    }
    
    public getImage() {
        return OP04_070_840.image;
    }
    
    public getName() {
        return OP04_070_840._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_070_840.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_070_840.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_070_840.archetypes;
    }
    
    public getPower(): number {
        return OP04_070_840.power;
    }

    public getCounter(): number {
        return OP04_070_840.counter;
    }

    public getLife(): number {
        return OP04_070_840.life;
    }
}
