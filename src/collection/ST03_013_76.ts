
import Card, { CardType } from "../entities/Card";

export default class ST03_013_76 extends Card {
    public static id: string = "ST03_013_76";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-013_2e4c7b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_013_76.id;
    }
    
    public getType() : CardType {
        return ST03_013_76.type as CardType;
    }
    
    public getImage() {
        return ST03_013_76.image;
    }
    
    public getName() {
        return ST03_013_76._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_013_76.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_013_76.keywords;
    }
    
    public getPower(): number {
        return ST03_013_76.power;
    }

    public getCounter(): number {
        return ST03_013_76.counter;
    }

    public getLife(): number {
        return ST03_013_76.life;
    }
}
