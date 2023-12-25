
import Card, { CardType } from "../entities/Card";

export default class OP01_019_82 extends Card {
    public static id: string = "OP01_019_82";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card you can change the attack target to this card.)\r\n[DON!! x2] [Opponent's Turn] This Character gains +3000 Power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-019_4a06af_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_019_82.id;
    }
    
    public getType() : CardType {
        return OP01_019_82.type as CardType;
    }
    
    public getImage() {
        return OP01_019_82.image;
    }
    
    public getName() {
        return OP01_019_82._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_019_82.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_019_82.keywords;
    }
    
    public getPower(): number {
        return OP01_019_82.power;
    }

    public getCounter(): number {
        return OP01_019_82.counter;
    }

    public getLife(): number {
        return OP01_019_82.life;
    }
}
