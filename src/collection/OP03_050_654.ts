
import Card, { CardType } from "../entities/Card";

export default class OP03_050_654 extends Card {
    public static id: string = "OP03_050_654";
    
    public static _name: string = "Boodle";

    public effect: string = "<Blocker>\r\n[On K.O] You may trash the top card of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-050_60c4bc_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP03_050_654.id;
    }
    
    public getType() : CardType {
        return OP03_050_654.type as CardType;
    }
    
    public getImage() {
        return OP03_050_654.image;
    }
    
    public getName() {
        return OP03_050_654._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_050_654.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_050_654.keywords;
    }
}
