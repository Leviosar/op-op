
import Card, { CardType } from "../entities/Card";

export default class ST05_014_233 extends Card {
    public static id: string = "ST05_014_233";
    
    public static _name: string = "Buena Fiesta";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 {FILM} type card other than [Buena Fiesta] and add it to your hand. Then, return the other cards to the bottom of the deck in any order.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-014_7c514e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["FILM","Pirate Fest"];
    
    public static power: number = 0;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_014_233.id;
    }
    
    public getType() : CardType {
        return ST05_014_233.type as CardType;
    }
    
    public getImage() {
        return ST05_014_233.image;
    }
    
    public getName() {
        return ST05_014_233._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_014_233.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_014_233.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST05_014_233.archetypes;
    }
    
    public getPower(): number {
        return ST05_014_233.power;
    }

    public getCounter(): number {
        return ST05_014_233.counter;
    }

    public getLife(): number {
        return ST05_014_233.life;
    }
}
