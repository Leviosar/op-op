
import Card, { CardType } from "../entities/Card";

export default class ST08_003_732 extends Card {
    public static id: string = "ST08_003_732";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-003_5d8b8f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_003_732.id;
    }
    
    public getType() : CardType {
        return ST08_003_732.type as CardType;
    }
    
    public getImage() {
        return ST08_003_732.image;
    }
    
    public getName() {
        return ST08_003_732._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_003_732.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_003_732.keywords;
    }
    
    public getPower(): number {
        return ST08_003_732.power;
    }

    public getCounter(): number {
        return ST08_003_732.counter;
    }

    public getLife(): number {
        return ST08_003_732.life;
    }
}
