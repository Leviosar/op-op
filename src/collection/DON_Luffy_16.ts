
import Card, { CardType } from "../entities/Card";

export default class DON_Luffy_16 extends Card {
    public static id: string = "DON_Luffy_16";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "";
    
    public source: string = "Misc [MISC]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/DON-Luffy_7a008d_jp.png";
    
    public static type: CardType = "don";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return DON_Luffy_16.id;
    }
    
    public getType() : CardType {
        return DON_Luffy_16.type as CardType;
    }
    
    public getImage() {
        return DON_Luffy_16.image;
    }
    
    public getName() {
        return DON_Luffy_16._name;
    }
    
    public getCost(): number {
        return parseInt(DON_Luffy_16.cost);
    }
    
    public getKeywords(): string[] {
        return DON_Luffy_16.keywords;
    }
    
    public getPower(): number {
        return DON_Luffy_16.power;
    }

    public getCounter(): number {
        return DON_Luffy_16.counter;
    }

    public getLife(): number {
        return DON_Luffy_16.life;
    }
}
