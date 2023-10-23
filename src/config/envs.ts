import 'dotenv/config';
import * as env from 'env-var';

export const envs = {

    // PORT: env.get('PORT').required().asPortNumber(),
    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString(),
    DATABASE_URL:env.get('DATABASE_URL').required().asString(),
    DATABASE_USER:env.get('DATABASE_USER').required().asString(),
    DATABASE_DB: env.get('DATABASE_DB').required().asString(),
    DATABASE_PASSWORD:env.get('DATABASE_PASSWORD').required().asString(),
  }