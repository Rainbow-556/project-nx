export function placeOrderUseCase({ goods }) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, 500);
  });
}
