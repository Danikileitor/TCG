export enum Rareza {
    COMMON = 'common',
    UNCOMMON = 'uncommon',
    RARE = 'rare',
    SPECIAL = 'special',
    MYTHIC = 'mythic',
    BONUS = 'bonus'
}

export const Rarezas: { [key in Rareza]: { [lang: string]: string } } = {
    [Rareza.COMMON]: {
        en: 'Common',
        es: 'Común',
        fr: 'Commun',
        de: 'Gewöhnlich',
        it: 'Comune',
        pt: 'Comum',
        ja: '',
        zhs: ''
    },
    [Rareza.UNCOMMON]: {
        en: 'Uncommon',
        es: 'Poco común',
        fr: 'Peu commun',
        de: 'Selten',
        it: 'Non comune',
        pt: 'Pouco comum',
        ja: '',
        zhs: ''
    },
    [Rareza.RARE]: {
        en: 'Rare',
        es: 'Raro',
        fr: 'Rare',
        de: 'Rar',
        it: 'Raro',
        pt: 'Raro',
        ja: '',
        zhs: ''
    },
    [Rareza.SPECIAL]: {
        en: 'Special',
        es: 'Especial',
        fr: 'Spécial',
        de: 'Sonder',
        it: 'Speciale',
        pt: 'Especial',
        ja: '',
        zhs: ''
    },
    [Rareza.MYTHIC]: {
        en: 'Mythic',
        es: 'Mítico',
        fr: 'Mythique',
        de: 'Mythisch',
        it: 'Mitico',
        pt: 'Mítico',
        ja: '',
        zhs: ''
    },
    [Rareza.BONUS]: {
        en: 'Bonus',
        es: 'Bonus',
        fr: 'Bonus',
        de: 'Bonus',
        it: 'Bonus',
        pt: 'Bônus',
        ja: '',
        zhs: ''
    }
}

export function getRareza(rareza: string, idioma: string): string | undefined {
    const rarezaEnum = Rareza[rareza.toUpperCase() as keyof typeof Rareza]
    if (rarezaEnum && Rarezas[rarezaEnum] && Rarezas[rarezaEnum][idioma]) {
        return Rarezas[rarezaEnum][idioma]
    } else {
        return undefined
    }
}