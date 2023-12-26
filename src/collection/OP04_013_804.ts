
import Card, { CardType } from "../entities/Card";

export default class OP04_013_804 extends Card {
    public static id: string = "OP04_013_804";
    
    public static _name: string = "Pell";

    public effect: string = "[DON!! x1] [When Attacking] K.O. up to 1 of your opponent's Characters with 4000 power or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-013_955e89_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Alabasta"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_013_804.id;
    }
    
    public getType() : CardType {
        return OP04_013_804.type as CardType;
    }
    
    public getImage() {
        return OP04_013_804.image;
    }
    
    public getName() {
        return OP04_013_804._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_013_804.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_013_804.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_013_804.archetypes;
    }
    
    public getPower(): number {
        return OP04_013_804.power;
    }

    public getCounter(): number {
        return OP04_013_804.counter;
    }

    public getLife(): number {
        return OP04_013_804.life;
    }
}
