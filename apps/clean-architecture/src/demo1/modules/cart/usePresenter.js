import { reactive, computed } from 'vue';
import { useService } from '@/demo1/useService';
import { useSticky } from './useSticky';

// usePresenter与视图直接交互的，作为入口，负责ui状态和交互逻辑，并且调用业务service
// 把其他交互状态和逻辑拆到各自的useXX中
export function usePresenter() {
  const cartService = useService({ name: 'cart' });
  const orderService = useService({ name: 'order' });

  const onAddBtnTap = async () => {
    // 上报
    // reportEvent();

    // 交互逻辑
    // showLoading();

    // 执行业务逻辑
    try {
      await cartService.addGoods({ goods: { goodsId: 'goodsId', price: 2 } });
      // showToast('添加成功');
    } catch (e) {
      console.log(e);
      // showToast('添加失败');
    } finally {
      // hideLoading();
    }
  };

  const onSubmitBtnTap = async () => {
    // 交互逻辑
    // showLoading();

    // 执行业务逻辑
    try {
      await orderService.placeOrder();
      // showToast('提交成功');
    } catch (e) {
      console.log(e);
      // showToast('提交失败');
      if (e.code === 1) {
        // goLogin();
        return;
      }
      // showToast(e.message);
    } finally {
      // hideLoading();
    }
  };

  const { isSticky, onScroll } = useSticky();

  return {
    cartServiceState: cartService.state,
    orderServiceState: orderService.state,
    onAddBtnTap,
    onSubmitBtnTap,
    isSticky,
    onScroll
  };
}
