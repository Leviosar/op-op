
import Card, { CardType } from "../entities/Card";

export default class OP02_051_522 extends Card {
    public static id: string = "OP02_051_522";
    
    public static _name: string = "Emporio Ivankov";

    public effect: string = "[On Play] Draw cards until you have 3 cards in your hand, then play up to 1 blue {Impel Down} type Character card with a cost of 6 or less from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-051_1c06fa_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_051_522.id;
    }
    
    public getType() : CardType {
        return OP02_051_522.type as CardType;
    }
    
    public getImage() {
        return OP02_051_522.image;
    }
    
    public getName() {
        return OP02_051_522._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_051_522.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_051_522.keywords;
    }
    
    public getPower(): number {
        return OP02_051_522.power;
    }

    public getCounter(): number {
        return OP02_051_522.counter;
    }

    public getLife(): number {
        return OP02_051_522.life;
    }
}
