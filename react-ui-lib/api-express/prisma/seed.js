import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Precargando autores y libros...");

  // === AUTORES ===
  const martin = await prisma.author.create({
    data: { name: "Robert C. Martin" },
  });

  const fowler = await prisma.author.create({
    data: { name: "Martin Fowler" },
  });

  const gamma = await prisma.author.create({
    data: { name: "Erich Gamma" },
  });

  const knuth = await prisma.author.create({
    data: { name: "Donald Knuth" },
  });

  // === LIBROS ===
  await prisma.book.createMany({
    data: [
      {
        title: "Clean Code",
        price: 1200,
        imageUrl: "https://m.media-amazon.com/images/I/41xShlnTZTL.jpg",
        authorId: martin.id,
      },
      {
        title: "The Clean Coder",
        price: 1100,
        imageUrl: "https://m.media-amazon.com/images/I/41jEbK-jG+L.jpg",
        authorId: martin.id,
      },
      {
        title: "Refactoring",
        price: 1500,
        imageUrl: "https://m.media-amazon.com/images/I/41QY9G5cG3L.jpg",
        authorId: fowler.id,
      },
      {
        title: "Patterns of Enterprise Application Architecture",
        price: 1700,
        imageUrl: "https://m.media-amazon.com/images/I/51k+e7l8aSL.jpg",
        authorId: fowler.id,
      },
      {
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        price: 1800,
        imageUrl: "https://m.media-amazon.com/images/I/51kuc0iWo8L.jpg",
        authorId: gamma.id,
      },
      {
        title: "The Art of Computer Programming, Vol. 1",
        price: 2000,
        imageUrl: "https://m.media-amazon.com/images/I/41pT+VqfU-L.jpg",
        authorId: knuth.id,
      },
    ],
  });

  console.log("✅ Datos precargados con éxito!");
}

main()
  .catch((e) => {
    console.error("❌ Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
