
import Card, { CardType } from "../entities/Card";

export default class OP01_016_904 extends Card {
    public static id: string = "OP01_016_904";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-016_54f844_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_016_904.id;
    }
    
    public getType() : CardType {
        return OP01_016_904.type as CardType;
    }
    
    public getImage() {
        return OP01_016_904.image;
    }
    
    public getName() {
        return OP01_016_904._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_016_904.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_016_904.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_016_904.archetypes;
    }
    
    public getPower(): number {
        return OP01_016_904.power;
    }

    public getCounter(): number {
        return OP01_016_904.counter;
    }

    public getLife(): number {
        return OP01_016_904.life;
    }
}
