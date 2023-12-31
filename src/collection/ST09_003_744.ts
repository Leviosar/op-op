
import Card, { CardType } from "../entities/Card";

export default class ST09_003_744 extends Card {
    public static id: string = "ST09_003_744";
    
    public static _name: string = "Ulti";

    public effect: string = "";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-003_f75874_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_003_744.id;
    }
    
    public getType() : CardType {
        return ST09_003_744.type as CardType;
    }
    
    public getImage() {
        return ST09_003_744.image;
    }
    
    public getName() {
        return ST09_003_744._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_003_744.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_003_744.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_003_744.archetypes;
    }
    
    public getPower(): number {
        return ST09_003_744.power;
    }

    public getCounter(): number {
        return ST09_003_744.counter;
    }

    public getLife(): number {
        return ST09_003_744.life;
    }
}
