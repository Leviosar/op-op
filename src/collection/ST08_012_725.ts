
import Card, { CardType } from "../entities/Card";

export default class ST08_012_725 extends Card {
    public static id: string = "ST08_012_725";
    
    public static _name: string = "Laboon";

    public effect: string = "";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-012_e29633_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_012_725.id;
    }
    
    public getType() : CardType {
        return ST08_012_725.type as CardType;
    }
    
    public getImage() {
        return ST08_012_725.image;
    }
    
    public getName() {
        return ST08_012_725._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_012_725.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_012_725.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST08_012_725.archetypes;
    }
    
    public getPower(): number {
        return ST08_012_725.power;
    }

    public getCounter(): number {
        return ST08_012_725.counter;
    }

    public getLife(): number {
        return ST08_012_725.life;
    }
}
