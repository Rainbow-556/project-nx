import { Service } from '../service';
import { reactive } from 'vue';
import { getCartUseCase } from './getCartUseCase';
import { removeGoodsUseCase } from './removeGoodsUseCase';
import { addGoodsUseCase } from './addGoodsUseCase';
import { clearCartUseCase } from './clearCartUseCase';

export class CartService extends Service {
  #shopId = '';

  constructor({ shopId, serviceManager }) {
    super({ serviceManager });
    this.#shopId = shopId;
    this.state = reactive({
      visible: false,
      goodsList: []
    });
  }

  async initCart() {
    const res = await getCartUseCase({ shopId: this.#shopId });
    this.state.goodsList = res.goodsList;
    this.serviceManager.get({ name: 'order' }).updateTotalPrice();
  }

  async addGoods({ goods }) {
    await addGoodsUseCase({ shopId: this.#shopId });
    this.state.goodsList.push(goods);
    this.serviceManager.get({ name: 'order' }).updateTotalPrice();
  }

  async removeGoods({ goods }) {
    await removeGoodsUseCase({ shopId: this.#shopId, goodsId: goods.goodsId });
    const index = this.state.goodsList.findIndex(item => item.goodsId === goods.goodsId);
    this.state.goodsList.splice(index, 1);
    this.serviceManager.get({ name: 'order' }).updateTotalPrice();
  }

  async clear() {
    await clearCartUseCase({ shopId: this.#shopId });
    this.state.goodsList = [];
    this.serviceManager.get({ name: 'order' }).updateTotalPrice();
  }
}
