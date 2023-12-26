
import Card, { CardType } from "../entities/Card";

export default class DON_don_15 extends Card {
    public static id: string = "DON_don_15";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "Your Turn +1000";
    
    public source: string = "Misc [MISC]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/DON-don_630ca7_jp.jpg";
    
    public static type: CardType = "don";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return DON_don_15.id;
    }
    
    public getType() : CardType {
        return DON_don_15.type as CardType;
    }
    
    public getImage() {
        return DON_don_15.image;
    }
    
    public getName() {
        return DON_don_15._name;
    }
    
    public getCost(): number {
        return parseInt(DON_don_15.cost);
    }
    
    public getKeywords(): string[] {
        return DON_don_15.keywords;
    }
    
    public getArchetypes(): string[] {
        return DON_don_15.archetypes;
    }
    
    public getPower(): number {
        return DON_don_15.power;
    }

    public getCounter(): number {
        return DON_don_15.counter;
    }

    public getLife(): number {
        return DON_don_15.life;
    }
}
