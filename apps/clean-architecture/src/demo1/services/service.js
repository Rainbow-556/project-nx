export class Service {
  #serviceManager;
  state;

  constructor({ serviceManager }) {
    this.#serviceManager = serviceManager;
  }

  get serviceManager() {
    return this.#serviceManager;
  }
}
