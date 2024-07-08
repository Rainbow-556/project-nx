import { inject, computed } from 'vue';

export function useService({ name }) {
  const service = inject('serviceManager').get({ name });
  return { service, state: computed(() => service.state) };
}
