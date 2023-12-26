
import Card, { CardType } from "../entities/Card";

export default class ST03_012_99 extends Card {
    public static id: string = "ST03_012_99";
    
    public static _name: string = "Pacifista";

    public effect: string = "";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-012_c5aa66_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Biological Weapon","Navy"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_012_99.id;
    }
    
    public getType() : CardType {
        return ST03_012_99.type as CardType;
    }
    
    public getImage() {
        return ST03_012_99.image;
    }
    
    public getName() {
        return ST03_012_99._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_012_99.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_012_99.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_012_99.archetypes;
    }
    
    public getPower(): number {
        return ST03_012_99.power;
    }

    public getCounter(): number {
        return ST03_012_99.counter;
    }

    public getLife(): number {
        return ST03_012_99.life;
    }
}
