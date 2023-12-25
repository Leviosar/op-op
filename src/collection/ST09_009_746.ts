
import Card, { CardType } from "../entities/Card";

export default class ST09_009_746 extends Card {
    public static id: string = "ST09_009_746";
    
    public static _name: string = "Fuugetsu Omusubi";

    public effect: string = "[Trigger] K.O up to 1 of your opponent's Characters with a cost of 1 or less, and add this card to your hand.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-009_cb6f79_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_009_746.id;
    }
    
    public getType() : CardType {
        return ST09_009_746.type as CardType;
    }
    
    public getImage() {
        return ST09_009_746.image;
    }
    
    public getName() {
        return ST09_009_746._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_009_746.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_009_746.keywords;
    }
    
    public getPower(): number {
        return ST09_009_746.power;
    }

    public getCounter(): number {
        return ST09_009_746.counter;
    }

    public getLife(): number {
        return ST09_009_746.life;
    }
}
