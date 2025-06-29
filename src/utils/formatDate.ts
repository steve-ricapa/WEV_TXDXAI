// src/utils/formatDate.ts

/**
 * Formatea una fecha ISO 8601 a 'DD/MM/YYYY' o al formato deseado.
 * @param isoDate - Cadena ISO de fecha, por ejemplo '2025-06-27T12:34:56Z'
 * @returns Fecha formateada 'DD/MM/YYYY'
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}