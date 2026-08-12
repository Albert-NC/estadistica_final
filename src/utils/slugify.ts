export function getDocenteSlug(nombre: string): string {
  return nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/^(dr\.|dra\.|msc\.|msc|ms\.|q\.f\.|qf\.|adm\.|est\.)\s+/i, "") // remove prefixes
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ""); // trim hyphens
}
