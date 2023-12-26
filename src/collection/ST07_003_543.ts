
import Card, { CardType } from "../entities/Card";

export default class ST07_003_543 extends Card {
    public static id: string = "ST07_003_543";
    
    public static _name: string = "Charlotte Katakuri";

    public effect: string = "[On Play] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area. Then, if you have less Life Cards than your opponent, this Character gains <Rush>";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-003_4cc212_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_003_543.id;
    }
    
    public getType() : CardType {
        return ST07_003_543.type as CardType;
    }
    
    public getImage() {
        return ST07_003_543.image;
    }
    
    public getName() {
        return ST07_003_543._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_003_543.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_003_543.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_003_543.archetypes;
    }
    
    public getPower(): number {
        return ST07_003_543.power;
    }

    public getCounter(): number {
        return ST07_003_543.counter;
    }

    public getLife(): number {
        return ST07_003_543.life;
    }
}
