
import Card, { CardType } from "../entities/Card";

export default class ST08_012_725 extends Card {
    public static id: string = "ST08_012_725";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-012_e29633_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_012_725.id;
    }
    
    public getType() : CardType {
        return ST08_012_725.type as CardType;
    }
    
    public getImage() {
        return ST08_012_725.image;
    }
    
    public getName() {
        return ST08_012_725._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_012_725.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_012_725.keywords;
    }
    
    public getPower(): number {
        return ST08_012_725.power;
    }

    public getCounter(): number {
        return ST08_012_725.counter;
    }

    public getLife(): number {
        return ST08_012_725.life;
    }
}
