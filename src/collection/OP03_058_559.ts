
import Card, { CardType } from "../entities/Card";

export default class OP03_058_559 extends Card {
    public static id: string = "OP03_058_559";
    
    public static _name: string = "Iceburg";

    public effect: string = "This Leader can not attack.\r\n[Acitvate:Main] [DON!!-1] You may rest this Leader: Play up to 1 Character with the {Galley-La Company} type that costs 5 or less from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-040_c62b8e_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return OP03_058_559.id;
    }
    
    public getType() : CardType {
        return OP03_058_559.type as CardType;
    }
    
    public getImage() {
        return OP03_058_559.image;
    }
    
    public getName() {
        return OP03_058_559._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_058_559.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_058_559.keywords;
    }
    
    public getPower(): number {
        return OP03_058_559.power;
    }

    public getCounter(): number {
        return OP03_058_559.counter;
    }

    public getLife(): number {
        return OP03_058_559.life;
    }
}
