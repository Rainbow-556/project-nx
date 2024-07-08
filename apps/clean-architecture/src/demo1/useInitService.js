import { provide } from 'vue';
import { ServiceManager } from './services/serviceManager';
import { OrderService } from './services/order/index';
import { CartService } from './services/cart/index';

export function useInitService() {
  const serviceManager = new ServiceManager();
  initService(serviceManager);
  provide('serviceManager', serviceManager);
}

function initService(serviceManager) {
  serviceManager.register({ name: 'order', service: new OrderService({ serviceManager }) });
  serviceManager.register({ name: 'cart', service: new CartService({ serviceManager }) });
}
