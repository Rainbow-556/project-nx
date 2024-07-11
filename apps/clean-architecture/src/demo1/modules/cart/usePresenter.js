import { reactive, computed } from 'vue';
import { useService } from '@/demo1/useService';

// usePresenter与视图直接交互的，作为入口，负责ui状态和交互逻辑，并且调用业务service
// 把其他交互状态和逻辑拆到各自的useXX中
export function usePresenter() {
  const cartService = useService({ name: 'cart' });
  const orderService = useService({ name: 'order' });

  const onAddBtnTap = async () => {
    // 点击行为上报
    // reportEvent();

    // 交互逻辑
    // showLoading();

    // 执行业务逻辑
    try {
      await cartService.addGoods({ goods: { goodsId: 'goodsId', price: 2 } });
    } catch (e) {
      console.log(e);
      // showErrorToast('添加失败');
    } finally {
      // hideLoading();
    }
  };

  return {
    cartServiceState: cartService.state,
    orderServiceState: orderService.state,
    onAddBtnTap
  };
}
