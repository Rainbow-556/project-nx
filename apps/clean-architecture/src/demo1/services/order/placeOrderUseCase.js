import { Result } from '@/demo1/result';

export async function placeOrderUseCase({ orderService, userService, cartService }) {
  if (!userService.state.isLogin) {
    throw new Result({ success: false, message: '未登录' });
  }
  if (!cartService.state.goodsList.length) {
    throw new Result({ success: false, message: '购物车为空' });
  }
  await cartService.clear();
  return new Result({ success: true, message: '下单成功' });
}
