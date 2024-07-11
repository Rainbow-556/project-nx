export function addGoodsUseCase({ cartService, goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      cartService.state.goodsList.push(goods);
      cartService.serviceManager.get({ name: 'order' }).updateTotalPrice();
      resolve();
    }, 500);
  });
}
