import * as XLSX from "xlsx";
import path from "path";
import { promises as fs } from "fs";

// Carrega arquivo .xlsx e retorna array de objetos tipados
export async function loadExcel<T>(fileName: string): Promise<T[]> {
  const filePath = path.join(process.cwd(), "db", fileName);
  const buf = await fs.readFile(filePath);
  const workbook = XLSX.read(buf, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json<T>(sheet, { defval: "" });
}

// Normaliza strings: remove acentos, espaços extras e transforma em minúsculas
export function normalize(str: string): string {
  return str
    ? str.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, " ").trim().toLowerCase()
    : "";
}

// Gera variações do nome para facilitar a correspondência
export function generateNameVariations(lastname: string, firstname: string): string[] {
  const variations = new Set<string>();
  const full = `${firstname} ${lastname}`;
  variations.add(full);
  variations.add(`${lastname} ${firstname}`);
  variations.add(`madame ${full}`);
  variations.add(`monsieur ${full}`);
  variations.add(`${lastname}, ${firstname}`);
  variations.add(firstname);
  variations.add(lastname);
  return Array.from(variations).map(normalize);
}

// Verifica se o nome da linha corresponde a alguma variação
export function isDeputyMatch(row: { name?: string; firstname?: string }, nameVariations: string[]): boolean {
  const rowName = normalize(row.name || "");
  const rowFirst = normalize(row.firstname || "");
  const fullName = normalize(`${rowFirst} ${rowName}`);
  return nameVariations.some(
    (v) => rowName.includes(v) || rowFirst.includes(v) || fullName.includes(v)
  );
}
