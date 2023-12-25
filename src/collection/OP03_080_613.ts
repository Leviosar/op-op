
import Card, { CardType } from "../entities/Card";

export default class OP03_080_613 extends Card {
    public static id: string = "OP03_080_613";
    
    public static _name: string = "Kaku";

    public effect: string = "[On Play] You may return 2 cards with a type including \"CP\" from your trash to the bottom of your deck in any order: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-080_40ff9a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_080_613.id;
    }
    
    public getType() : CardType {
        return OP03_080_613.type as CardType;
    }
    
    public getImage() {
        return OP03_080_613.image;
    }
    
    public getName() {
        return OP03_080_613._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_080_613.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_080_613.keywords;
    }
    
    public getPower(): number {
        return OP03_080_613.power;
    }

    public getCounter(): number {
        return OP03_080_613.counter;
    }

    public getLife(): number {
        return OP03_080_613.life;
    }
}
