
import Card, { CardType } from "../entities/Card";

export default class ST03_016_97 extends Card {
    public static id: string = "ST03_016_97";
    
    public static _name: string = "Thrust Pad Cannon";

    public effect: string = "[Counter] Return a Character with a cost of 3 or less to its owner's hand. \r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-016_78085a_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Seven Warlords of the Sea","Revolutionary Army"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_016_97.id;
    }
    
    public getType() : CardType {
        return ST03_016_97.type as CardType;
    }
    
    public getImage() {
        return ST03_016_97.image;
    }
    
    public getName() {
        return ST03_016_97._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_016_97.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_016_97.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_016_97.archetypes;
    }
    
    public getPower(): number {
        return ST03_016_97.power;
    }

    public getCounter(): number {
        return ST03_016_97.counter;
    }

    public getLife(): number {
        return ST03_016_97.life;
    }
}
