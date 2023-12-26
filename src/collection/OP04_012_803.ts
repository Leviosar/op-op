
import Card, { CardType } from "../entities/Card";

export default class OP04_012_803 extends Card {
    public static id: string = "OP04_012_803";
    
    public static _name: string = "Nefertari Cobra";

    public effect: string = "[Your Turn] All of your {Alabasta} type Characters other than this Character gain +1000 power.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-012_ac679c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_012_803.id;
    }
    
    public getType() : CardType {
        return OP04_012_803.type as CardType;
    }
    
    public getImage() {
        return OP04_012_803.image;
    }
    
    public getName() {
        return OP04_012_803._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_012_803.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_012_803.keywords;
    }
    
    public getPower(): number {
        return OP04_012_803.power;
    }

    public getCounter(): number {
        return OP04_012_803.counter;
    }

    public getLife(): number {
        return OP04_012_803.life;
    }
}
