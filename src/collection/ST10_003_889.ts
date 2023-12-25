
import Card, { CardType } from "../entities/Card";

export default class ST10_003_889 extends Card {
    public static id: string = "ST10_003_889";
    
    public static _name: string = "Eustass\"Captain\"Kid";

    public effect: string = "[Your Turn] If you have 4 or more Life cards, give this Leader −1000 power.\r\n[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Leader gains +2000 power during this turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-003_62f558_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST10_003_889.id;
    }
    
    public getType() : CardType {
        return ST10_003_889.type as CardType;
    }
    
    public getImage() {
        return ST10_003_889.image;
    }
    
    public getName() {
        return ST10_003_889._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_003_889.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_003_889.keywords;
    }
    
    public getPower(): number {
        return ST10_003_889.power;
    }

    public getCounter(): number {
        return ST10_003_889.counter;
    }

    public getLife(): number {
        return ST10_003_889.life;
    }
}
