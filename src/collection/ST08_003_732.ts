
import Card, { CardType } from "../entities/Card";

export default class ST08_003_732 extends Card {
    public static id: string = "ST08_003_732";
    
    public static _name: string = "Gaimon";

    public effect: string = "";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-003_5d8b8f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_003_732.id;
    }
    
    public getType() : CardType {
        return ST08_003_732.type as CardType;
    }
    
    public getImage() {
        return ST08_003_732.image;
    }
    
    public getName() {
        return ST08_003_732._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_003_732.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_003_732.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST08_003_732.archetypes;
    }
    
    public getPower(): number {
        return ST08_003_732.power;
    }

    public getCounter(): number {
        return ST08_003_732.counter;
    }

    public getLife(): number {
        return ST08_003_732.life;
    }
}
