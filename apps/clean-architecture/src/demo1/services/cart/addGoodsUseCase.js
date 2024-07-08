export function addGoodsUseCase({ goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ goodsList: [] });
    }, 500);
  });
}
