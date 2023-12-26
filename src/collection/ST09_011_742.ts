
import Card, { CardType } from "../entities/Card";

export default class ST09_011_742 extends Card {
    public static id: string = "ST09_011_742";
    
    public static _name: string = "Monkey D Luffy";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains +2000 power until the start of your next turn.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-011_e9630a_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_011_742.id;
    }
    
    public getType() : CardType {
        return ST09_011_742.type as CardType;
    }
    
    public getImage() {
        return ST09_011_742.image;
    }
    
    public getName() {
        return ST09_011_742._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_011_742.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_011_742.keywords;
    }
    
    public getPower(): number {
        return ST09_011_742.power;
    }

    public getCounter(): number {
        return ST09_011_742.counter;
    }

    public getLife(): number {
        return ST09_011_742.life;
    }
}
