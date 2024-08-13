import { Result } from '@/demo1/result';

export function addGoodsUseCase({ cartService, goods }) {
  if (cartService.state.goodsList.find(item => item.goodsId === goods.goodsId)) {
    throw new Result({ success: false, message: '商品已存在' });
  }
  cartService.state.goodsList.push(goods);
  cartService.serviceManager.get({ name: 'order' }).updateTotalPrice();
  return new Result({ success: true, message: '添加成功' });
}
