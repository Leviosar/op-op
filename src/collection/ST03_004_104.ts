
import Card, { CardType } from "../entities/Card";

export default class ST03_004_104 extends Card {
    public static id: string = "ST03_004_104";
    
    public static _name: string = "Gecko Moria";

    public effect: string = "[On Play] Add 1 {The Seven Warlords of the Sea} or {Thriller Bark Pirates} type Character with a cost of 4 or less other than [Gecko Moria] from your trash to your hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-004_13f97b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Thriller Bark Pirate"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_004_104.id;
    }
    
    public getType() : CardType {
        return ST03_004_104.type as CardType;
    }
    
    public getImage() {
        return ST03_004_104.image;
    }
    
    public getName() {
        return ST03_004_104._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_004_104.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_004_104.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_004_104.archetypes;
    }
    
    public getPower(): number {
        return ST03_004_104.power;
    }

    public getCounter(): number {
        return ST03_004_104.counter;
    }

    public getLife(): number {
        return ST03_004_104.life;
    }
}
