import { Injectable } from '@nestjs/common';
import { ConfigManager } from '@nestjsplus/config';
import * as Joi from 'joi';

@Injectable()
export class UrlConfigService extends ConfigManager {

    provideConfigSpec() {
        return {
            BASE_URL: {
                validate: Joi.string(),
                required: true,
            },
            API_DOCS_JSON: {
                validate: Joi.string(),
                required: true,
            }
        };
    }

    getBaseUrl(): string {
        return this.get<string>('BASE_URL');
    }

    getSwaggerJsonUrl(): string {
        return this.get<string>('API_DOCS_JSON');
    }

   

}
