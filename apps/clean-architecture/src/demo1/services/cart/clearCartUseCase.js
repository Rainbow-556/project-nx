export function clearCartUseCase({ goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ goodsList: [] });
    }, 500);
  });
}
