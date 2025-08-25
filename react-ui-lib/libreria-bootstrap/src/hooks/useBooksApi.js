import { useEffect, useState } from "react";

export function useBooksApi(query = "programming") {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12`
        );
        const data = await res.json();

        const mappedBooks = data.items?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(", ") || "Autor desconocido",
          description: item.volumeInfo.description || "Sin descripción",
          image:
            item.volumeInfo.imageLinks?.thumbnail ||
            "https://via.placeholder.com/150x200?text=Sin+Imagen",
          price: (Math.random() * 40 + 10).toFixed(2), // precio ficticio
        })) || [];

        setBooks(mappedBooks);
      } catch (error) {
        console.error("Error al traer libros desde Google Books:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
  }, [query]);

  return { books, loading };
}
