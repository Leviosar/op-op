
import Card, { CardType } from "../entities/Card";

export default class OP01_008_73 extends Card {
    public static id: string = "OP01_008_73";
    
    public static _name: string = "Cavendish";

    public effect: string = "[On Play] You may return 1 of your Life cards to your hand: This Character gains <Rush> during this turn. (This character can attack the turn it comes into play.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-008_4ae5cd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["Supernovas","Beautiful Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_008_73.id;
    }
    
    public getType() : CardType {
        return OP01_008_73.type as CardType;
    }
    
    public getImage() {
        return OP01_008_73.image;
    }
    
    public getName() {
        return OP01_008_73._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_008_73.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_008_73.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_008_73.archetypes;
    }
    
    public getPower(): number {
        return OP01_008_73.power;
    }

    public getCounter(): number {
        return OP01_008_73.counter;
    }

    public getLife(): number {
        return OP01_008_73.life;
    }
}
