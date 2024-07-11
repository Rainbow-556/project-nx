export function removeGoodsUseCase({ cartService, goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      const index = cartService.state.goodsList.findIndex(item => item.goodsId === goods.goodsId);
      cartService.state.goodsList.splice(index, 1);
      cartService.serviceManager.get({ name: 'order' }).updateTotalPrice();
      resolve();
    }, 500);
  });
}
