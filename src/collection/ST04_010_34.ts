
import Card, { CardType } from "../entities/Card";

export default class ST04_010_34 extends Card {
    public static id: string = "ST04_010_34";
    
    public static _name: string = "Who's who";

    public effect: string = "[On Play] [Don!! -1] K.O. up to one of your opponent's cost 3 or lower Characters.\r\n\r\n[Trigger] You may play this card.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-010_b58a64_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_010_34.id;
    }
    
    public getType() : CardType {
        return ST04_010_34.type as CardType;
    }
    
    public getImage() {
        return ST04_010_34.image;
    }
    
    public getName() {
        return ST04_010_34._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_010_34.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_010_34.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_010_34.archetypes;
    }
    
    public getPower(): number {
        return ST04_010_34.power;
    }

    public getCounter(): number {
        return ST04_010_34.counter;
    }

    public getLife(): number {
        return ST04_010_34.life;
    }
}
