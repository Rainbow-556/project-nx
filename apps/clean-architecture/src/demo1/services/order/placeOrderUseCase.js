import { Result } from '@/demo1/result';

export function placeOrderUseCase({ orderService, userService, cartService }) {
  if (!userService.state.isLogin) {
    throw new Result({ success: false, message: '未登录' });
  }
  return new Promise(resolve => {
    setTimeout(async () => {
      await cartService.clear();
      resolve(new Result({ success: true, message: '下单成功' }));
    }, 500);
  });
}
