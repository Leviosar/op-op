import { App } from "vue";

import { dialog } from "../store/dialog";

export default {
    install: (app: App) => {
        app.config.globalProperties.$dialog = {
            open({title, text}: {title: string, text: string}): Promise<boolean> {
                return dialog().open({title, text})
            }
        }
    }
}