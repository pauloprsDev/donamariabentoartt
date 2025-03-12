/* eslint-disable no-undef */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obter o diretório atual em ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const files = fs.readdirSync(publicDir);

// Processa apenas arquivos de imagem
const imageFiles = files.filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file) && !file.includes('.webp')
);

async function convertImages() {
  for (const file of imageFiles) {
    const filePath = path.join(publicDir, file);
    const outputFilename = path.join(
      publicDir, 
      `${path.basename(file, path.extname(file))}.webp`
    );
    
    console.log(`Convertendo ${file} para WebP...`);
    
    try {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputFilename);
      
      console.log(`✓ Criado: ${path.basename(outputFilename)}`);
    } catch (error) {
      console.error(`Erro ao converter ${file}:`, error);
    }
  }
}

convertImages();