import { Service } from '../service';
import { reactive } from 'vue';

export class UserService extends Service {
  constructor({ serviceManager }) {
    super({ serviceManager });
    this.state = reactive({
      isLogin: false
    });
  }
}
