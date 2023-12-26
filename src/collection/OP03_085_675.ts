
import Card, { CardType } from "../entities/Card";

export default class OP03_085_675 extends Card {
    public static id: string = "OP03_085_675";
    
    public static _name: string = "Jabra";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-085_c2b9bc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_085_675.id;
    }
    
    public getType() : CardType {
        return OP03_085_675.type as CardType;
    }
    
    public getImage() {
        return OP03_085_675.image;
    }
    
    public getName() {
        return OP03_085_675._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_085_675.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_085_675.keywords;
    }
    
    public getPower(): number {
        return OP03_085_675.power;
    }

    public getCounter(): number {
        return OP03_085_675.counter;
    }

    public getLife(): number {
        return OP03_085_675.life;
    }
}
