
import Card, { CardType } from "../entities/Card";

export default class ST03_015_88 extends Card {
    public static id: string = "ST03_015_88";
    
    public static _name: string = "Sables";

    public effect: string = "[Main] Return 1 of your opponent's Characters with a cost of 7 or less to its owner's hand. \r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-015_cb73fb_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Seven Warlords of the Sea","Baroque Works"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_015_88.id;
    }
    
    public getType() : CardType {
        return ST03_015_88.type as CardType;
    }
    
    public getImage() {
        return ST03_015_88.image;
    }
    
    public getName() {
        return ST03_015_88._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_015_88.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_015_88.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_015_88.archetypes;
    }
    
    public getPower(): number {
        return ST03_015_88.power;
    }

    public getCounter(): number {
        return ST03_015_88.counter;
    }

    public getLife(): number {
        return ST03_015_88.life;
    }
}
