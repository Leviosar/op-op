
import Card, { CardType } from "../entities/Card";

export default class ST07_014_594 extends Card {
    public static id: string = "ST07_014_594";
    
    public static _name: string = "Pekoms";

    public effect: string = "[DON!!x1] [When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains <Banish> and 1000 power for this battle.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-014_ebf1de_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Banish"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_014_594.id;
    }
    
    public getType() : CardType {
        return ST07_014_594.type as CardType;
    }
    
    public getImage() {
        return ST07_014_594.image;
    }
    
    public getName() {
        return ST07_014_594._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_014_594.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_014_594.keywords;
    }
    
    public getPower(): number {
        return ST07_014_594.power;
    }

    public getCounter(): number {
        return ST07_014_594.counter;
    }

    public getLife(): number {
        return ST07_014_594.life;
    }
}
