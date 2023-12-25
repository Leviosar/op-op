
import Card, { CardType } from "../entities/Card";

export default class OP02_070_478 extends Card {
    public static id: string = "OP02_070_478";
    
    public static _name: string = "New Kama Land";

    public effect: string = "[Activate: Main] You may rest this Stage: If your Leader is [Emporio.Ivankov], draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-070_be5852_jp.jpg";
    
    public static type: CardType = "stage";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_070_478.id;
    }
    
    public getType() : CardType {
        return OP02_070_478.type as CardType;
    }
    
    public getImage() {
        return OP02_070_478.image;
    }
    
    public getName() {
        return OP02_070_478._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_070_478.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_070_478.keywords;
    }
    
    public getPower(): number {
        return OP02_070_478.power;
    }

    public getCounter(): number {
        return OP02_070_478.counter;
    }

    public getLife(): number {
        return OP02_070_478.life;
    }
}
