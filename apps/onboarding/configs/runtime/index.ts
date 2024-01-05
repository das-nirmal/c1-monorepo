import { loadConfig } from 'c12';
import { join } from "node:path";

export default function returnConfig(): Promise<any> {

  console.log('returnConfig called');
  
  return new Promise(async (resolve) => {
    const config = await loadConfig({
      cwd: join(process.cwd(), '/configs/runtime.config'),
      envName: process.env.APP_ENVIRONMENT
    });

    resolve(config)
  })
}