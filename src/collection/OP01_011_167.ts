
import Card, { CardType } from "../entities/Card";

export default class OP01_011_167 extends Card {
    public static id: string = "OP01_011_167";
    
    public static _name: string = "Gordon";

    public effect: string = "[On Play] You may place 1 card from your hand at the bottom of your deck: Draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-010_18cf84_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["FILM"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_011_167.id;
    }
    
    public getType() : CardType {
        return OP01_011_167.type as CardType;
    }
    
    public getImage() {
        return OP01_011_167.image;
    }
    
    public getName() {
        return OP01_011_167._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_011_167.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_011_167.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_011_167.archetypes;
    }
    
    public getPower(): number {
        return OP01_011_167.power;
    }

    public getCounter(): number {
        return OP01_011_167.counter;
    }

    public getLife(): number {
        return OP01_011_167.life;
    }
}
