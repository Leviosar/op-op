
import Card, { CardType } from "../entities/Card";

export default class OP01_021_281 extends Card {
    public static id: string = "OP01_021_281";
    
    public static _name: string = "Franky";

    public effect: string = "[DON!!x1] This character can attack your opponent's active characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-021_7a907a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_021_281.id;
    }
    
    public getType() : CardType {
        return OP01_021_281.type as CardType;
    }
    
    public getImage() {
        return OP01_021_281.image;
    }
    
    public getName() {
        return OP01_021_281._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_021_281.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_021_281.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_021_281.archetypes;
    }
    
    public getPower(): number {
        return OP01_021_281.power;
    }

    public getCounter(): number {
        return OP01_021_281.counter;
    }

    public getLife(): number {
        return OP01_021_281.life;
    }
}
