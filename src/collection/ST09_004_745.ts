
import Card, { CardType } from "../entities/Card";

export default class ST09_004_745 extends Card {
    public static id: string = "ST09_004_745";
    
    public static _name: string = "Kaido";

    public effect: string = "[DON!!x1] While you have 2 cards or less in your life area, this Character can't be K.O.'ed in battle.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-004_504767_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_004_745.id;
    }
    
    public getType() : CardType {
        return ST09_004_745.type as CardType;
    }
    
    public getImage() {
        return ST09_004_745.image;
    }
    
    public getName() {
        return ST09_004_745._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_004_745.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_004_745.keywords;
    }
    
    public getPower(): number {
        return ST09_004_745.power;
    }

    public getCounter(): number {
        return ST09_004_745.counter;
    }

    public getLife(): number {
        return ST09_004_745.life;
    }
}
