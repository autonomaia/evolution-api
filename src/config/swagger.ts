// src/config/swagger.ts
import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

export function setupSwagger(app: Express) {
  const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Evolution API',
        version: '1.0.0',
        description: 'Documentação da API WhatsApp Evolution',
      },
    },
    apis: ['./src/routes/**/*.ts'], // ajuste conforme o caminho real das suas rotas
  };

  const specs = swaggerJsdoc(options);
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));
}
