export interface Move {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface NamesM {
    name: string;
    language: Language;
}

export interface MoveResponse {
    id: number;
    name: string;
    moves: Move[];
    names: NamesM[];
}