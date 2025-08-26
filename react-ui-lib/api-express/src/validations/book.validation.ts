import { z } from "zod";

export const createBookSchema = z.object({
  title: z.string()
    .min(1, "El título es requerido")
    .max(200, "El título no puede exceder 200 caracteres")
    .trim(),

  price: z.preprocess(
    (val) => Number(val),
    z.number().positive("El precio debe ser positivo").max(999999, "El precio no puede exceder 999999")
  ),

  imageUrl: z.string()
    .min(1, "La URL no puede estar vacía")
    .optional(),

  authorId: z.preprocess(
    (val) => Number(val),
    z.number().int("El ID del autor debe ser un número entero").positive("El ID del autor debe ser positivo")
  )
});

export const updateBookSchema = createBookSchema.partial();
