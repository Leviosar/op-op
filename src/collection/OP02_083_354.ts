
import Card, { CardType } from "../entities/Card";

export default class OP02_083_354 extends Card {
    public static id: string = "OP02_083_354";
    
    public static _name: string = "Hanyabal";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck, reveal up to 1 purple [Impel Down] type card other than [Hanyabal] and add it to your hand. Then, place the rest at the bottom of the deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-083_32c6b0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Impel Down"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_083_354.id;
    }
    
    public getType() : CardType {
        return OP02_083_354.type as CardType;
    }
    
    public getImage() {
        return OP02_083_354.image;
    }
    
    public getName() {
        return OP02_083_354._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_083_354.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_083_354.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_083_354.archetypes;
    }
    
    public getPower(): number {
        return OP02_083_354.power;
    }

    public getCounter(): number {
        return OP02_083_354.counter;
    }

    public getLife(): number {
        return OP02_083_354.life;
    }
}
