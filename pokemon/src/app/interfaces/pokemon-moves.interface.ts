export interface Move {
    name: string;
    url: string;
}

export interface Language {
    name: string;
    url: string;
}

export interface Name {
    name: string;
    language: Language;
}

export interface MoveResponse {
    id: number;
    name: string;
    moves: Move[];
    names: Name[];
}