export enum Idioma {
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    DE = 'de',
    IT = 'it',
    PT = 'pt',
    JA = 'ja',
    KO = 'ko',
    RU = 'ru',
    ZHS = 'zhs',
    ZHT = 'zht',
    HE = 'he',
    LA = 'la',
    GRC = 'grc',
    AR = 'ar',
    SA = 'sa',
    PH = 'ph',
    QYA = 'qy'
}

export const Idiomas: { [key in Idioma]: { [lang: string]: string } } = {
    [Idioma.EN]: {
        en: 'English'
    },
    [Idioma.ES]: {
        es: 'Español'
    },
    [Idioma.FR]: {
        fr: 'Français'
    },
    [Idioma.DE]: {
        de: 'Deutsch'
    },
    [Idioma.IT]: {
        it: 'Italiano'
    },
    [Idioma.PT]: {
        pt: 'Português'
    },
    [Idioma.JA]: {
        ja: '',
        en: 'Japanese'
    },
    [Idioma.KO]: {
        ko: '',
        en: 'Korean'
    },
    [Idioma.RU]: {
        ru: '',
        en: 'Russian'
    },
    [Idioma.ZHS]: {
        zhs: '',
        en: 'Simplified Chinese'
    },
    [Idioma.ZHT]: {
        zht: '',
        en: 'Traditional Chinese'
    },
    [Idioma.HE]: {
        he: '',
        en: 'Hebrew'
    },
    [Idioma.LA]: {
        la: 'Latina',
        en: 'Latin'
    },
    [Idioma.GRC]: {
        grc: '',
        en: 'Ancient Greek'
    },
    [Idioma.AR]: {
        ar: '',
        en: 'Arabic'
    },
    [Idioma.SA]: {
        sa: '',
        en: 'Sanskrit'
    },
    [Idioma.PH]: {
        en: 'Phyrexian'
    },
    [Idioma.QYA]: {
        en: 'Quenya'
    }
}

export function getIdioma(idioma: string): string {
    const idiomaEnum = Object.values(Idioma).find((idiomaEnum) => idiomaEnum === idioma)
    if (idiomaEnum) {
        return Idiomas[idiomaEnum as Idioma][idiomaEnum] || Idiomas[idiomaEnum as Idioma]['en']
    } else {
        return idioma
    }
}