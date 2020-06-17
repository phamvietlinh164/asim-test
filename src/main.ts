import { NestFactory } from '@nestjs/core';

import * as rateLimit from 'express-rate-limit';
import * as expressIp from 'express-ip';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import { AppModule } from './app.module';
import { UrlConfigService } from './config/config.url.service';
declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const urlConfigService = app.get(UrlConfigService);
  const baseUrl = urlConfigService.getBaseUrl();
  const swaggerJsonUrl = urlConfigService.getSwaggerJsonUrl();
  // app.setGlobalPrefix('/api');
  /* swagger */
  const options = new DocumentBuilder()
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .setTitle('Medpro Inside V2')
    .setDescription('Medpro Inside API description')
    .setVersion('1.0')
    .setExternalDoc(`${baseUrl} click to view json format`, swaggerJsonUrl)
    // .addTag('medpro-v2')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  const apiPath = '/api-docs';
  app.use(apiPath, basicAuth({
    challenge: true,
    users: { nhantc: '123456' },
  }));
  SwaggerModule.setup(apiPath, app, document, {
    customSiteTitle: 'Medpro Inside API V2',
    customfavIcon: '',
  });
  /* swagger */
  app.enableCors();
  /* rating limit */
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 10000, // limit each IP to 100 requests per windowMs
    }),
  );
  app.use(expressIp().getIpInfoMiddleware);
  await app.listen(6700);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
