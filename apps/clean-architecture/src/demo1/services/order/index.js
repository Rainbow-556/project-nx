import { Service } from '../service';
import { reactive } from 'vue';
import { placeOrderUseCase } from './placeOrderUseCase';
import { Result } from '@/demo1/result';

export class OrderService extends Service {
  constructor({ serviceManager }) {
    super({ serviceManager });
    this.state = reactive({
      totalPrice: 0
    });
  }

  updateTotalPrice() {
    const totalPrice = this.serviceManager
      .get({ name: 'cart' })
      .state.goodsList.reduce((total, goods) => total + goods.price, 0);
    this.state.totalPrice = totalPrice;
  }

  async placeOrder() {
    const cartService = this.serviceManager.get({ name: 'cart' });
    const userService = this.serviceManager.get({ name: 'user' });
    await placeOrderUseCase({ orderService: this, userService, cartService });
  }
}
