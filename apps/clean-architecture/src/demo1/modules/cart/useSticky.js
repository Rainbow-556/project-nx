import { reactive, computed } from 'vue';
import { useService } from '@/demo1/useService';

// presenter负责ui状态和交互逻辑，并且调用业务service
export function useSticky() {
  const { service: cartService } = useService({ name: 'cart' });
  const { service: orderService } = useService({ name: 'order' });

  const onScroll = e => {
    cartService.addGoods({ goods: { goodsId: 'goodsId', price: 2 } });
  };

  return {
    onScroll
  };
}
