
import Card, { CardType } from "../entities/Card";

export default class OP02_075_480 extends Card {
    public static id: string = "OP02_075_480";
    
    public static _name: string = "Shiki";

    public effect: string = "[Trigger] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-075_96ce0f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM","Golden Lion Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_075_480.id;
    }
    
    public getType() : CardType {
        return OP02_075_480.type as CardType;
    }
    
    public getImage() {
        return OP02_075_480.image;
    }
    
    public getName() {
        return OP02_075_480._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_075_480.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_075_480.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_075_480.archetypes;
    }
    
    public getPower(): number {
        return OP02_075_480.power;
    }

    public getCounter(): number {
        return OP02_075_480.counter;
    }

    public getLife(): number {
        return OP02_075_480.life;
    }
}
