export function setupCounter(element) {
  let counter = 0;
  const setCounter = count => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(++counter));
  setCounter(0);
}

export function codeFromLib2() {
  return 'codeFromLib2222';
}
