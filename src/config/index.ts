// @ts-ignore
import * as productionConfig from './config.production.ts';
// @ts-ignore
import * as localConfig from './config.local.ts';

const appStage = process.env.REACT_APP_STAGE ? process.env.REACT_APP_STAGE.trim() : 'production';

interface ConfigModel {
  BASE_URL: string;
}

let CONFIG: ConfigModel;

if (appStage === 'production') {
  CONFIG = productionConfig;
} else {
  CONFIG = localConfig;
}

export default CONFIG;
