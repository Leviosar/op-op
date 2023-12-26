
import Card, { CardType } from "../entities/Card";

export default class OP04_077_848 extends Card {
    public static id: string = "OP04_077_848";
    
    public static _name: string = "Ideo";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-077_f5effa_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Dressrosa"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_077_848.id;
    }
    
    public getType() : CardType {
        return OP04_077_848.type as CardType;
    }
    
    public getImage() {
        return OP04_077_848.image;
    }
    
    public getName() {
        return OP04_077_848._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_077_848.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_077_848.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_077_848.archetypes;
    }
    
    public getPower(): number {
        return OP04_077_848.power;
    }

    public getCounter(): number {
        return OP04_077_848.counter;
    }

    public getLife(): number {
        return OP04_077_848.life;
    }
}
