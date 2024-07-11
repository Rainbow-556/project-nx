import { reactive, computed } from 'vue';
import { useService } from '@/demo1/useService';

// presenter负责ui状态和交互逻辑，并且调用业务service
export function useSticky() {
  // const cartService  = useService({ name: 'cart' });
  // const orderService = useService({ name: 'order' });

  const isSticky = ref(false);

  const onScroll = e => {
    isSticky.value = e.target.scrollTop > 100;
  };

  return {
    isSticky,
    onScroll
  };
}
