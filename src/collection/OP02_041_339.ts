
import Card, { CardType } from "../entities/Card";

export default class OP02_041_339 extends Card {
    public static id: string = "OP02_041_339";
    
    public static _name: string = "Monkey. D. Luffy";

    public effect: string = "<Blocker>\r\n[On Play] Play up to 1 cost 4 or lower <FILM> or <Straw Hat Crew> type Character card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-041_5ef7e8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Blocker>\r\n[On Play] Play up to 1 cost 4 or lower <FILM> or <Straw Hat Crew"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_041_339.id;
    }
    
    public getType() : CardType {
        return OP02_041_339.type as CardType;
    }
    
    public getImage() {
        return OP02_041_339.image;
    }
    
    public getName() {
        return OP02_041_339._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_041_339.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_041_339.keywords;
    }
    
    public getPower(): number {
        return OP02_041_339.power;
    }

    public getCounter(): number {
        return OP02_041_339.counter;
    }

    public getLife(): number {
        return OP02_041_339.life;
    }
}
