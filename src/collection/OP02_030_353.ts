
import Card, { CardType } from "../entities/Card";

export default class OP02_030_353 extends Card {
    public static id: string = "OP02_030_353";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[Activate: Main] (Once per turn) (3): Switch this Character to active.\r\n[On K.O.] Play up to 1 {Wano Country} type Character card with a cost of 3 from your deck. Then, shuffle your deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-030_eb4839_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_030_353.id;
    }
    
    public getType() : CardType {
        return OP02_030_353.type as CardType;
    }
    
    public getImage() {
        return OP02_030_353.image;
    }
    
    public getName() {
        return OP02_030_353._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_030_353.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_030_353.keywords;
    }
    
    public getPower(): number {
        return OP02_030_353.power;
    }

    public getCounter(): number {
        return OP02_030_353.counter;
    }

    public getLife(): number {
        return OP02_030_353.life;
    }
}
