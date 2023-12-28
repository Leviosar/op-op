import { battle } from "../store/battle";
import { game } from "../store/game";
import { log } from "../store/log";
import { target } from "../store/target";
import CardAction from "./CardAction";
import CardActionMetadata from "./CardActionMetadata";
import Player from "./Player";
import { v4 as uuid } from 'uuid';

export type CardType = "char" | "don" | "leader" | "stage" | "event";

export type CardLocation = "deck" | "don-deck" | "cost-area" | "character-area" | "leader-area" | "stage-area" | "trashed" | "hand";

export default class Card {
    public uuid: string = uuid();

    public static id: string = "";

    public static image: string | null = null;

    public static type: CardType | null = null;

    public static name: string = "";

    public static keywords: string[] = [];

    public static power: number = 0;

    public static counter: number = 0;

    public static life: number = 0;

    public _tapped: boolean = false;
    
    public summonedAt: number = 0;

    public source: string = "";

    public effect: string = "";

    public attached: Card[] = [];

    public owner: Player | undefined = undefined;

    public location: CardLocation = "deck";

    public getImage(): string {
        return "";
    }

    public getType(): CardType {
        return "don";
    }

    public getCost(): number {
        return 0;
    }

    public getKeywords(): string[] {
        return [];
    }

    public getId(): string {
        return "0";
    }

    public getName(): string {
        return "0";
    }

    public getPower(): number {
        return 0;
    }

    public getCounter(): number {
        return 0;
    }

    public getLife(): number {
        return 0;
    }

    public getOwner(): Player | undefined {
        return this.owner;
    }

    public tap() {
        this._tapped = true;
    }

    public untap() {
        this._tapped = false;
    }

    get tapped() {
        return this._tapped;
    }

    get isValidTargetForAttack(): boolean {
        return this.tapped || this.getType() === 'leader';
    }

    get canAttack(): boolean {
        return !this.tapped && (game().turn.count - this.summonedAt > 0)
    }

    get isOwnerTurn(): boolean {
        return this.getOwner()?.id === game().turn.player;
    }

    get actions(): CardAction[] {
        const types: Record<string, CardAction[]> = {
            "don": [
                { id: "attach", name: "Attach", condition: () => this.isOwnerTurn && !this.tapped },
            ],
            "char": [
                { id: "summon", name: "Summon", condition: () => this.getOwner() !== undefined && this.isOwnerTurn && this.getCost() <= this.getOwner()!.untappedDons && this.location === "hand" },
                { id: "trigger", name: "Effect", condition: () => this.isOwnerTurn },
                { id: "attack", name: "Attack", condition: () => this.isOwnerTurn && this.canAttack},
            ],
            "leader": [
                { id: "trigger", name: "Effect", condition: () => this.isOwnerTurn && this.canAttack },
                { id: "attack", name: "Attack", condition: () => this.isOwnerTurn && this.canAttack },
            ],
            "stage": [
                { id: "trigger", name: "Effect", condition: () => this.isOwnerTurn && this.canAttack },
            ],
            "event": [
                { id: "trigger", name: "Effect", condition: () => this.getOwner() !== undefined && this.isOwnerTurn && this.getCost() <= this.getOwner()!.untappedDons },
            ]
        }

        return types[this.getType()];
    }

    public ko() {
        if (this.getOwner() === undefined) throw "Cannot K.O. a card with no owner";

        (this.getOwner() as Player).characters = (this.getOwner() as Player).characters.filter(
            card => card.uuid !== this.uuid
        )

        this.getOwner()?.trash.push(this)
    }

    public execute(action: CardAction, player: Player, metadata: CardActionMetadata | null) {
        switch (action.id) {
            case "summon":
                this.summon(player, metadata)
            break;
            case "trigger":
                this.trigger(player, metadata)
            break;
            case "attack":
                this.attack(metadata)
            break;
            case "attach":
                this.attach(metadata)
            break;
        }
    }

    public summon(player: Player, metadata: CardActionMetadata | null) {
        // Summon cost
        if (player.cost.filter(c => !c.tapped).length < this.getCost()) {
            return;
        }

        player.pay(this.getCost())
        this.summonedAt = game().turn.count;
        this.location = "character-area";

        log().add(`Player ${player.id} summoned ${this.getName()}`, "debug", { card: this })

        switch (this.getType()) {
            case "char":
                setTimeout(() => {
                    player.characters.push(this)
                }, 1000)
                break;
            case "stage":
                setTimeout(() => {
                    player.stage = this
                }, 1000)
                break
            default:
                break;
        }
        
        if (metadata?.origin === "hand") {
            player.hand = player.hand.filter((c) => c !== this)
        }
    }

    public trigger(player: Player, _: CardActionMetadata | null) {
        // Summon cost
        if (player.cost.filter(c => !c.tapped).length >= 1) {
            player.characters.push(this)
            player.pay(1)
        }
    }

    public attack(_: CardActionMetadata | null) {
        this.tap();
        battle().start(this);
    }

    public attach(_: CardActionMetadata | null) {
        target().request({
            amount: 1,
            quantifier: 'exactly',
            filters: [
                { comparator: (c) => c.getOwner()?.id == this.getOwner()?.id },
                { comparator: (c) => c.getType() === "leader" || c.location === "character-area" },
            ],
            callback: (c) => {
                const card = c[0];
                this.getOwner()!.cost = this.getOwner()!.cost.filter(d => d.uuid !== this.uuid);
                card.attached.push(this);
            }
        })
    }
}