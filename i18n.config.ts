import { languages } from "./assets/dist/libs/tinymce/plugins/codesample/plugin";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            home: 'home',
            category: 'categories',
            language: 'language',
            dark: 'dark',
            light: 'light',
            disconnect: 'disconnect',
            login: 'login',
            clear: 'clear',
            guest: 'Guest',
        },
        fr: {
            home: 'accueil',
            category: 'catégories',
            language: 'langue',
            dark: 'sombre',
            light: 'claire',
            disconnect: 'déconnexion',
            login: 'se connecter',
            clear: 'vider le panier',
            guest: 'visite',
        }
    }
}))
