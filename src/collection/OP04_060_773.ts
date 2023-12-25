
import Card, { CardType } from "../entities/Card";

export default class OP04_060_773 extends Card {
    public static id: string = "OP04_060_773";
    
    public static _name: string = "Crocodile";

    public effect: string = "[On Play] DON!! -2: If your Leader's type includes \"Baroque Works\", place up to 1 card from the top of your deck on top of your Life.\r\n[On Your Opponent's Attack] [Once per Turn] [DON!! -1] Draw 1 card and trash 1 card in your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-060_64da10_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_060_773.id;
    }
    
    public getType() : CardType {
        return OP04_060_773.type as CardType;
    }
    
    public getImage() {
        return OP04_060_773.image;
    }
    
    public getName() {
        return OP04_060_773._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_060_773.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_060_773.keywords;
    }
    
    public getPower(): number {
        return OP04_060_773.power;
    }

    public getCounter(): number {
        return OP04_060_773.counter;
    }

    public getLife(): number {
        return OP04_060_773.life;
    }
}
