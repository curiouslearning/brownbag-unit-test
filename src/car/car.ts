export class Engine {
  constructor(
    public status: string = 'off',
    public model: string = 'v8'
  ) {}

  start() {
    this.status = 'on';
  }

  stop() {
    this.status = 'off';
  }
}
  
export class Car {
  public status: string = 'parked';
  constructor(public engine: Engine = new Engine()) {}

  start() {
    this.engine.start();
    this.status = 'idle';
  }

  off() {
    this.engine.stop();
    this.status = 'parked';
  }
}