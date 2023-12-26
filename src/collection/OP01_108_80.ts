
import Card, { CardType } from "../entities/Card";

export default class OP01_108_80 extends Card {
    public static id: string = "OP01_108_80";
    
    public static _name: string = "Kamazo the Manslayer";

    public effect: string = "[On K.O.] DON!! -1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. 1 of your \r\nopponent’s Characters with a cost of 5 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-108_a25329_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Kid Pirates","SMILE"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_108_80.id;
    }
    
    public getType() : CardType {
        return OP01_108_80.type as CardType;
    }
    
    public getImage() {
        return OP01_108_80.image;
    }
    
    public getName() {
        return OP01_108_80._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_108_80.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_108_80.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_108_80.archetypes;
    }
    
    public getPower(): number {
        return OP01_108_80.power;
    }

    public getCounter(): number {
        return OP01_108_80.counter;
    }

    public getLife(): number {
        return OP01_108_80.life;
    }
}
