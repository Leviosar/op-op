
import Card, { CardType } from "../entities/Card";

export default class OP01_002_135 extends Card {
    public static id: string = "OP01_002_135";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[Activate Main][Once per turn] (2) (You may rest the specified number of DON!! cards in your Cost Area): If you control 5 Characters, return 1 of your Characters to the owners hand, then play 1 cost 5 or lower Character of a different color as the returned Character from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-002_79b455_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP01_002_135.id;
    }
    
    public getType() : CardType {
        return OP01_002_135.type as CardType;
    }
    
    public getImage() {
        return OP01_002_135.image;
    }
    
    public getName() {
        return OP01_002_135._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_002_135.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_002_135.keywords;
    }
    
    public getPower(): number {
        return OP01_002_135.power;
    }

    public getCounter(): number {
        return OP01_002_135.counter;
    }

    public getLife(): number {
        return OP01_002_135.life;
    }
}
