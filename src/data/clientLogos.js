import { casosExito } from "./casosExito";

export const clientLogos = casosExito
  .filter(caso => caso.logo)
  .map(caso => ({
    id: caso.id,
    name: caso.title,
    logo: caso.logo,
    website: null // opcional, por ahora no linkeamos
  }));
