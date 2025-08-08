export interface Book {
  id: number;
  titulo: string;
  autor: string;
  imagenSrc: string;
}

export interface CreateBookRequest {
  titulo: string;
  autor: string;
  imagenSrc?: string;
}

export interface UpdateBookRequest {
  titulo?: string;
  autor?: string;
  imagenSrc?: string;
}
