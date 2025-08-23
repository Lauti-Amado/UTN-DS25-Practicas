export interface CreateBookRequest {
  title: string;
  author: string;
  price: number;
  imageUrl?: string;
}

export interface UpdateBookRequest {
  title?: string;
  author?: string;
  price?: number;
  imageUrl?: string;
}