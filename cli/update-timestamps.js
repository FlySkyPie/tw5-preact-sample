import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesPath = path.resolve(__dirname, "../", "files/");
const timestampsFilePath = path.resolve(filesPath, "timestamps.json");

if (!fs.existsSync(filesPath)) {
    fs.mkdirSync(filesPath);
}

fs.writeFileSync(timestampsFilePath, JSON.stringify({ value: new Date().toISOString() }))