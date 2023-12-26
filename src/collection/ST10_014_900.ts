
import Card, { CardType } from "../entities/Card";

export default class ST10_014_900 extends Card {
    public static id: string = "ST10_014_900";
    
    public static _name: string = "Wire";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, draw 1 card and trash 1 card from your hand.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-014_4d07ae_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Kid Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_014_900.id;
    }
    
    public getType() : CardType {
        return ST10_014_900.type as CardType;
    }
    
    public getImage() {
        return ST10_014_900.image;
    }
    
    public getName() {
        return ST10_014_900._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_014_900.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_014_900.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST10_014_900.archetypes;
    }
    
    public getPower(): number {
        return ST10_014_900.power;
    }

    public getCounter(): number {
        return ST10_014_900.counter;
    }

    public getLife(): number {
        return ST10_014_900.life;
    }
}
