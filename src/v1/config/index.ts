import { IConfig } from '../interfaces/IConfig';
import defaultConfig from './default';
import developmentConfig from './development';
import productionConfig from './production';
import testConfig from './test';

const env = process.env.NODE_ENV || 'development';

const configMap: Record<string, Partial<IConfig>> = {
	development: developmentConfig,
	production: productionConfig,
	test: testConfig,
};

const environmentConfig = configMap[env] || developmentConfig;

const config: IConfig = { ...defaultConfig, ...environmentConfig } as IConfig;

export default config;
