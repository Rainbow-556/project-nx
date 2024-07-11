import { provide } from 'vue';
import { ServiceManager } from './services/serviceManager';
import { OrderService } from './services/order/index';
import { CartService } from './services/cart/index';
import { UserService } from './services/user/index';

export function useInitService({ shopId }) {
  const serviceManager = new ServiceManager();
  initService(serviceManager, shopId);
  provide('serviceManager', serviceManager);
}

function initService(serviceManager, shopId) {
  serviceManager.register({ name: 'order', service: new OrderService({ serviceManager }) });
  serviceManager.register({ name: 'cart', service: new CartService({ serviceManager, shopId }) });
  serviceManager.register({ name: 'user', service: new UserService({ serviceManager }) });
}
