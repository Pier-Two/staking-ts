import { generateApi } from 'swagger-typescript-api';
import path from 'path';
import fs from 'fs';

async function main() {
  const now = Date.now();
  const specUrl = 'https://gw-1.api.piertwo.io/docs-json';
  // const specUrl = 'http://localhost:3000/docs-json';

  const specResponse = await fetch(specUrl);

  const specJson = await specResponse.json();

  const inputPath = path.resolve(process.cwd(), `.tmp/${now}_spec.json`);
  const outputPath = path.resolve(process.cwd(), 'src');

  console.log('OUTPUT PATH: ', outputPath);

  fs.writeFileSync(inputPath, JSON.stringify(specJson, null, 2));

  generateApi({
    fileName: 'PierTwoStakingApiBase.ts',
    output: outputPath,
    input: inputPath,
    unwrapResponseData: true
  })
}

main();