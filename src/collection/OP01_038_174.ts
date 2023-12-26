
import Card, { CardType } from "../entities/Card";

export default class OP01_038_174 extends Card {
    public static id: string = "OP01_038_174";
    
    public static _name: string = "Kanjuro";

    public effect: string = "[DON!! x1] [When Attacking] K.O. 1 of your opponent's rested Characters with a cost of 2 or less.\r\n[On K.O.] Your opponent chooses 1 card from your hand; trash that card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-038_13b27b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country","Nine Red Scabbards"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_038_174.id;
    }
    
    public getType() : CardType {
        return OP01_038_174.type as CardType;
    }
    
    public getImage() {
        return OP01_038_174.image;
    }
    
    public getName() {
        return OP01_038_174._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_038_174.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_038_174.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_038_174.archetypes;
    }
    
    public getPower(): number {
        return OP01_038_174.power;
    }

    public getCounter(): number {
        return OP01_038_174.counter;
    }

    public getLife(): number {
        return OP01_038_174.life;
    }
}
