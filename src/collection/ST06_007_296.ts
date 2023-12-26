
import Card, { CardType } from "../entities/Card";

export default class ST06_007_296 extends Card {
    public static id: string = "ST06_007_296";
    
    public static _name: string = "Tsuru";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-007_25bff6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_007_296.id;
    }
    
    public getType() : CardType {
        return ST06_007_296.type as CardType;
    }
    
    public getImage() {
        return ST06_007_296.image;
    }
    
    public getName() {
        return ST06_007_296._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_007_296.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_007_296.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_007_296.archetypes;
    }
    
    public getPower(): number {
        return ST06_007_296.power;
    }

    public getCounter(): number {
        return ST06_007_296.counter;
    }

    public getLife(): number {
        return ST06_007_296.life;
    }
}
