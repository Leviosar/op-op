
import Card, { CardType } from "../entities/Card";

export default class ST08_011_733 extends Card {
    public static id: string = "ST08_011_733";
    
    public static _name: string = "Monkey D Luffy";

    public effect: string = "";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-011_46f65c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_011_733.id;
    }
    
    public getType() : CardType {
        return ST08_011_733.type as CardType;
    }
    
    public getImage() {
        return ST08_011_733.image;
    }
    
    public getName() {
        return ST08_011_733._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_011_733.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_011_733.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST08_011_733.archetypes;
    }
    
    public getPower(): number {
        return ST08_011_733.power;
    }

    public getCounter(): number {
        return ST08_011_733.counter;
    }

    public getLife(): number {
        return ST08_011_733.life;
    }
}
