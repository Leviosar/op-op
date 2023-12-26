import { defineStore } from "pinia";

export type DialogConfig = {
    hasTitle?: boolean;
    hasCloseButton?: boolean;
    persistent?: boolean;
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    onClose?: () => any;
};

export interface DialogState {
    visible: boolean;
    title: string;
    text: string;
    resolve: ((value: boolean | PromiseLike<boolean>) => void) | null;
    reject: ((value: boolean | PromiseLike<boolean>) => void) | null;
}

export const dialog = defineStore('dialog', {
    state: (): DialogState => ({
        visible: false,
        title: "Dialog",
        text: "Dialog text",
        resolve: null,
        reject: null
    }),
    actions: {
        open({title, text}: {title: string, text: string}) {
            this.title = title;
            this.text = text;
            this.visible = true;

            return new Promise<boolean>((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            })
        },
        confirm() {
            if (this.resolve === null) return;

            this.resolve(true);
            this.visible = false;
        },
        cancel() {
            if (this.resolve === null) return;

            this.resolve(false);
            this.visible = false;
        },
    }
})