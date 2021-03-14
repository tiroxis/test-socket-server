import { ConnectionOptions, createConnection } from 'typeorm';
import { DB_CONFIG } from './ormconfig';


const connection = createConnection(DB_CONFIG as ConnectionOptions);

export { connection };
