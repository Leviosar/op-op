
import Card, { CardType } from "../entities/Card";

export default class OP01_016_136 extends Card {
    public static id: string = "OP01_016_136";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-016_2df168_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_016_136.id;
    }
    
    public getType() : CardType {
        return OP01_016_136.type as CardType;
    }
    
    public getImage() {
        return OP01_016_136.image;
    }
    
    public getName() {
        return OP01_016_136._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_016_136.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_016_136.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_016_136.archetypes;
    }
    
    public getPower(): number {
        return OP01_016_136.power;
    }

    public getCounter(): number {
        return OP01_016_136.counter;
    }

    public getLife(): number {
        return OP01_016_136.life;
    }
}
