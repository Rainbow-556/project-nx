import { reactive } from 'vue';
import { Service } from '../service';
import { getCartUseCase } from './getCartUseCase';
import { removeGoodsUseCase } from './removeGoodsUseCase';
import { addGoodsUseCase } from './addGoodsUseCase';
import { clearCartUseCase } from './clearCartUseCase';
/*
逻辑层与视图层的边界判断标准是该状态是否在业务逻辑中需要，若需要则应该在模型层建模，在逻辑层编写依赖逻辑，视图层转换为渲染需要的 UI State
如cart的visible属性，被其他模块依赖，如果cart module视图内部的ui状态则写在视图内部即可
*/
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
    await getCartUseCase({ cartService: this });
  }

  async addGoods({ goods }) {
    await addGoodsUseCase({ cartService: this, goods });
  }

  async removeGoods({ goods }) {
    await removeGoodsUseCase({ cartService: this, goods });
  }

  async clear() {
    await clearCartUseCase({ cartService: this });
  }
}
