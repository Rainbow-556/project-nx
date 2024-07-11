export class Result {
  constructor({ success, code, message, data }) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
  }
}
