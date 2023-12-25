
import Card, { CardType } from "../entities/Card";

export default class OP04_119_877 extends Card {
    public static id: string = "OP04_119_877";
    
    public static _name: string = "Donquixote Rosinante";

    public effect: string = "[Opponent's Turn] If this Character is rested, your active Characters with a base cost of 5 cannot be K.O.'d by effects.\r\n[On Play] You may rest this Character: Play up to 1 green Character card with a cost of 5 from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-119_330f0f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_119_877.id;
    }
    
    public getType() : CardType {
        return OP04_119_877.type as CardType;
    }
    
    public getImage() {
        return OP04_119_877.image;
    }
    
    public getName() {
        return OP04_119_877._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_119_877.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_119_877.keywords;
    }
    
    public getPower(): number {
        return OP04_119_877.power;
    }

    public getCounter(): number {
        return OP04_119_877.counter;
    }

    public getLife(): number {
        return OP04_119_877.life;
    }
}
