export function removeGoodsUseCase({ goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ goodsList: [] });
    }, 500);
  });
}
