import Card from "./Card";

export default interface BlockingOption {
    response: boolean;
    blocker: Card | null;
}