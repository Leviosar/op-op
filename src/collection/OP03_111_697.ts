
import Card, { CardType } from "../entities/Card";

export default class OP03_111_697 extends Card {
    public static id: string = "OP03_111_697";
    
    public static _name: string = "Charlotte Praline";

    public effect: string = "[When Attacking] You may add 1 card from the top or bottom of your life to your hand: This Character gains +2000 power during this battle.\r\n[Trigger] You may discard 1 card from your hand: Play this card";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-111_cd9c0f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_111_697.id;
    }
    
    public getType() : CardType {
        return OP03_111_697.type as CardType;
    }
    
    public getImage() {
        return OP03_111_697.image;
    }
    
    public getName() {
        return OP03_111_697._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_111_697.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_111_697.keywords;
    }
    
    public getPower(): number {
        return OP03_111_697.power;
    }

    public getCounter(): number {
        return OP03_111_697.counter;
    }

    public getLife(): number {
        return OP03_111_697.life;
    }
}
