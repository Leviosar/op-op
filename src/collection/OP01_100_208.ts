
import Card, { CardType } from "../entities/Card";

export default class OP01_100_208 extends Card {
    public static id: string = "OP01_100_208";
    
    public static _name: string = "Kurozumi Higurashi";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-100_6e96ea_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Wano Country","Kurozumi Family"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_100_208.id;
    }
    
    public getType() : CardType {
        return OP01_100_208.type as CardType;
    }
    
    public getImage() {
        return OP01_100_208.image;
    }
    
    public getName() {
        return OP01_100_208._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_100_208.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_100_208.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_100_208.archetypes;
    }
    
    public getPower(): number {
        return OP01_100_208.power;
    }

    public getCounter(): number {
        return OP01_100_208.counter;
    }

    public getLife(): number {
        return OP01_100_208.life;
    }
}
