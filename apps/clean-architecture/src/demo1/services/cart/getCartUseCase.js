export function getCartUseCase({ shopId }) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ goodsList: [] });
    }, 500);
  });
}
