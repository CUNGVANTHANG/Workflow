function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

self.onmessage = (e) => {
  const n = e.data;
  const start = performance.now();
  const result = fibonacci(n);
  const end = performance.now();
  self.postMessage({ result, time: end - start });
};
