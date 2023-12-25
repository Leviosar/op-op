
import Card, { CardType } from "../entities/Card";

export default class OP04_050_827 extends Card {
    public static id: string = "OP04_050_827";
    
    public static _name: string = "Hanger";

    public effect: string = "[Activate: Main] You may trash 1 card from your hand and rest this Character: Draw 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-050_0a59f0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_050_827.id;
    }
    
    public getType() : CardType {
        return OP04_050_827.type as CardType;
    }
    
    public getImage() {
        return OP04_050_827.image;
    }
    
    public getName() {
        return OP04_050_827._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_050_827.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_050_827.keywords;
    }
    
    public getPower(): number {
        return OP04_050_827.power;
    }

    public getCounter(): number {
        return OP04_050_827.counter;
    }

    public getLife(): number {
        return OP04_050_827.life;
    }
}
