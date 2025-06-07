/// <reference types="node" />

import { promises as fs } from "fs";
import { join } from "path";
import * as XLSX from "xlsx";
import camelcaseKeys from "camelcase-keys";

const INPUT_DIR = join(process.cwd(), "db");
const OUTPUT_DIR = join(process.cwd(), "db");

async function parseExcel(filename: string): Promise<any[]> {
  const buffer = await fs.readFile(join(INPUT_DIR, filename));
  const workbook = XLSX.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  return XLSX.utils.sheet_to_json(sheet);
}

async function buildData() {
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const files = [
      { input: "105-depute.xlsx", output: "deputies.json" },
      { input: "107-presence-seance-publique.xlsx", output: "presence.json" },
      { input: "109-votes.xlsx", output: "votes.json" },
      { input: "112-texte-loi.xlsx", output: "laws.json" },
    ];

    for (const file of files) {
      const inputPath = join(INPUT_DIR, file.input);
      try {
        await fs.access(inputPath);
      } catch {
        console.warn(`⚠️  Arquivo não encontrado: ${inputPath}`);
        continue;
      }

      console.log(`🔄 Processando ${file.input}...`);
      const rawData = await parseExcel(file.input);
      const data = camelcaseKeys(rawData, { deep: true });
      const outputPath = join(OUTPUT_DIR, file.output);
      await fs.writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
      console.log(`✅ Salvo: ${outputPath}`);
    }
  } catch (error) {
    console.error("❌ Erro ao gerar dados:", error);
    process.exit(1);
  }
}

buildData();
