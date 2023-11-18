import { App, Plugin } from 'vue';
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import dayjs from 'dayjs';
dayjs.extend(LocalizedFormat)

// The Install function used by Vue to register the plugin
export const DateTime: Plugin = {
    install(app: App) {
        app.provide("dateTime", dayjs);
    }
}