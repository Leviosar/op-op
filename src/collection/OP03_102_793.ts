
import Card, { CardType } from "../entities/Card";

export default class OP03_102_793 extends Card {
    public static id: string = "OP03_102_793";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x2] [When Attacking] You may add the top or bottom card of your Life area to your hand: Add up to 1 card from the top of your deck to the top of your Life area. ";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-102_24d8a1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Vinsmoke Family"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_102_793.id;
    }
    
    public getType() : CardType {
        return OP03_102_793.type as CardType;
    }
    
    public getImage() {
        return OP03_102_793.image;
    }
    
    public getName() {
        return OP03_102_793._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_102_793.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_102_793.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_102_793.archetypes;
    }
    
    public getPower(): number {
        return OP03_102_793.power;
    }

    public getCounter(): number {
        return OP03_102_793.counter;
    }

    public getLife(): number {
        return OP03_102_793.life;
    }
}
