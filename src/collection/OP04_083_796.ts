
import Card, { CardType } from "../entities/Card";

export default class OP04_083_796 extends Card {
    public static id: string = "OP04_083_796";
    
    public static _name: string = "Sabo";

    public effect: string = "<Blocker>\r\n[On Play] Your Characters can not be KO'd by card effects until the start of your next turn. Then, draw 2 cards and trash 2 cards from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-083_0ecfe1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_083_796.id;
    }
    
    public getType() : CardType {
        return OP04_083_796.type as CardType;
    }
    
    public getImage() {
        return OP04_083_796.image;
    }
    
    public getName() {
        return OP04_083_796._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_083_796.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_083_796.keywords;
    }
    
    public getPower(): number {
        return OP04_083_796.power;
    }

    public getCounter(): number {
        return OP04_083_796.counter;
    }

    public getLife(): number {
        return OP04_083_796.life;
    }
}
