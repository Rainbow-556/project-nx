export function clearCartUseCase({ cartService }) {
  return new Promise(resolve => {
    setTimeout(() => {
      cartService.state.goodsList = [];
      cartService.serviceManager.get({ name: 'order' }).updateTotalPrice();
      resolve();
    }, 500);
  });
}
