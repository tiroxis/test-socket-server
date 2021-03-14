import 'reflect-metadata';
import { connection } from './common/config/database';
import { router } from './common/config/routing';
import WebSocket from 'ws';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Container } from 'inversify';

import './common/models';
import './site/controllers/api';


class Application {
  private container =  new Container();

  private httpServer;
  private websocketServer;
  private inversedServer;
  private port = 5000;
  private connection = connection;

  constructor() {

    this.connection.then(db => {
      this.inversedServer = new InversifyExpressServer(this.container, router, { rootPath: '/api/v1' }) ;
      this.httpServer = this.inversedServer.build();
      this.websocketServer = new WebSocket.Server({ server: this.httpServer })
      this.websocketServer.on('connection', ws => {
        ws.on('message', m => {
          this.websocketServer.clients.forEach(client => client.send(m));
        });

        ws.on("error", e => ws.send(e));

        ws.send('Hi there, I am a WebSocket server');
      });
      this.httpServer.listen(this.port, () => {
        console.log( `Server started at http://localhost:${ this.port }` );
      })
    });
  }
}


const app = new Application();

