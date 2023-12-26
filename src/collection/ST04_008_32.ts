
import Card, { CardType } from "../entities/Card";

export default class ST04_008_32 extends Card {
    public static id: string = "ST04_008_32";
    
    public static _name: string = "Jack";

    public effect: string = "[On Play] You may trash one card from your hand: Reveal one DON!! from your DON!! deck in Active.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-008_3cbf2f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_008_32.id;
    }
    
    public getType() : CardType {
        return ST04_008_32.type as CardType;
    }
    
    public getImage() {
        return ST04_008_32.image;
    }
    
    public getName() {
        return ST04_008_32._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_008_32.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_008_32.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_008_32.archetypes;
    }
    
    public getPower(): number {
        return ST04_008_32.power;
    }

    public getCounter(): number {
        return ST04_008_32.counter;
    }

    public getLife(): number {
        return ST04_008_32.life;
    }
}
