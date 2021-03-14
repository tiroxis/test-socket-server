import { IMessageEvent, IStringified, w3cwebsocket as W3CWebSocket } from 'websocket';

class WebSocketService {
  private client = new W3CWebSocket('ws://127.0.0.1:5000/api/v1/');

  constructor() {

    this.openConnection = this.openConnection.bind(this);
    this.onMessage = this.onMessage.bind(this);
    this.onCloseConnection = this.onCloseConnection.bind(this);
    this.onError = this.onError.bind(this);

    this.client.onopen = this.openConnection;
    this.client.onmessage = this.onMessage;
    this.client.onclose = this.onCloseConnection;
    this.client.onerror = this.onError;
  }

  private openConnection(){
    console.log('connected');
  }

  private onMessage(message: IMessageEvent) {
    console.log(message);
  }

  private onCloseConnection(){
    console.log('connection closed')
  }

  private onError(){
    console.log(arguments);
  }

  public send(data: ArrayBufferView | ArrayBuffer | Buffer | IStringified){
    this.client.send(data);
  };
  public close(code?: number, reason?: string){
    this.client.close(code, reason)
  };

}
const webSocketService = new WebSocketService();
export default webSocketService;
