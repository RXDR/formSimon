export interface NivelFormacion {
    estado:               boolean;
    id:                   number;
    nivelAcademico:       NivelAcademico;
    nombreNivelFormacion: string;
}

export interface NivelAcademico {
    estado: boolean;
    id:     number;
    nombre: string;
}