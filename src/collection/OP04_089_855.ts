
import Card, { CardType } from "../entities/Card";

export default class OP04_089_855 extends Card {
    public static id: string = "OP04_089_855";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-089_423f04_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa","Barto Club"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_089_855.id;
    }
    
    public getType() : CardType {
        return OP04_089_855.type as CardType;
    }
    
    public getImage() {
        return OP04_089_855.image;
    }
    
    public getName() {
        return OP04_089_855._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_089_855.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_089_855.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_089_855.archetypes;
    }
    
    public getPower(): number {
        return OP04_089_855.power;
    }

    public getCounter(): number {
        return OP04_089_855.counter;
    }

    public getLife(): number {
        return OP04_089_855.life;
    }
}
