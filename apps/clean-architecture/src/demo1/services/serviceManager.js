export class ServiceManager {
  #services = {};

  register({ name, service }) {
    this.#services[name] = service;
  }

  get({ name }) {
    return this.#services[name];
  }
}
