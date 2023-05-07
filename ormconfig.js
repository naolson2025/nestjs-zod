import { DataSource } from 'typeorm';

const options = {
  development: {
    synchronize: false,
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [`**/*.entity.js`],
    migrations: [`migrations/*.js`],
  },
  devMigrate: {
    synchronize: false,
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [`**/*.entity.ts`],
    migrations: [`migrations/*.ts`],
  },
  test: {
    synchronize: false,
    type: 'sqlite',
    database: 'test.sqlite',
    entities: [`**/*.entity.ts`],
    migrations: [`migrations/*.ts`],
  }
}

// switch (process.env.NODE_ENV) {
//   case 'development':
//     Object.assign(dbConfig, {
//       type: 'sqlite',
//       database: 'db.sqlite',
//       entities: ['**/*.entity.js'],
//       migrations: ['migrations/*.js'],
//       migrationsRun: true,
//     });
//     break;
//   case 'test':
//     Object.assign(dbConfig, {
//       type: 'sqlite',
//       database: 'test.sqlite',
//       entities: ['**/*.entity.ts'],
//       migrations: ['migrations/*.ts'],
//       migrationsRun: true,
//     });
//     break;
//   case 'production':
//     Object.assign(dbConfig, {
//       type: 'postgres',
//       url: process.env.DATABASE_URL,
//       migrationsRun: true,
//       entities: ['**/*.entity.js'],
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     });
//     break;
//   default:
//     throw new Error('Unknown environment');
// }

const dbConfig = options[process.env.NODE_ENV || 'development'];
const dataSource = new DataSource(dbConfig);

module.exports = { dbConfig, dataSource };
