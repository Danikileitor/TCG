export interface Symbol {
    object: string;
    has_more: boolean;
    data: Datum[];
}

export interface Datum {
    object: Object;
    symbol: string;
    svg_uri: string;
    loose_variant: null | string;
    english: string;
    transposable: boolean;
    represents_mana: boolean;
    appears_in_mana_costs: boolean;
    mana_value: number | null;
    hybrid: boolean;
    phyrexian: boolean;
    cmc: number | null;
    funny: boolean;
    colors: Color[];
    gatherer_alternates: string[] | null;
}

export enum Color {
    B = "B",
    G = "G",
    R = "R",
    U = "U",
    W = "W",
}

export enum Object {
    CardSymbol = "card_symbol",
}
