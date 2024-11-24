import { useState, useEffect, useRef } from "react";

function App() {
  const [fibSync, setFibSync] = useState<number[]>([]);
  const [fibAsync, setFibAsync] = useState<number[]>([]);
  const [timeSync, setTimeSync] = useState<number[]>([]);
  const [timeAsync, setTimeAsync] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState(false); // New state
  const [syncLoadings, setSyncLoadings] = useState<boolean[]>([]); // Changed state
  const [asyncLoadings, setAsyncLoadings] = useState<boolean[]>([]); // Changed state
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    workerRef.current = new Worker(new URL("./fibWorker.js", import.meta.url));
    workerRef.current.onmessage = (e) => {
      const { result, time } = e.data;
      setFibAsync((prev) => [...prev, result]);
      setTimeAsync((prev) => [...prev, time]);
      setAsyncLoadings((prev) => prev.slice(1)); // Remove loading
    };
    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  const NUMBER = 41;

  const calculateSync = () => {
    setSyncLoadings((prev) => [...prev, true]); // Add loading
    const start = performance.now();
    const result = fibonacci(NUMBER);
    const end = performance.now();
    setFibSync((prev) => [...prev, result]);
    setTimeSync((prev) => [...prev, end - start]);
    setSyncLoadings((prev) => prev.slice(1)); // Remove loading
  };

  const calculateAsync = () => {
    setAsyncLoadings((prev) => [...prev, true]); // Add loading
    workerRef.current?.postMessage(NUMBER);
  };

  const fibonacci = (n: number): number => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  const handleNewButtonClick = () => {
    // alert('Button clicked!');
    setShowMessage(true);
  };

  return (
    <div style={{ padding: "50px" }}>
      <button onClick={handleNewButtonClick}>Show Message</button>
      {showMessage && <p style={{ color: "green" }}>Button clicked!</p>}
      <div style={{ display: "flex", gap: "20px" }}>
        <div>
          <button onClick={calculateSync}>Calculate Fibonacci Sync</button>
          {syncLoadings.map((_, index) => (
            <p key={index} style={{ color: "orange" }}>
              Calculating synchronously...
            </p>
          ))}
          {fibSync.length > 0 && (
            <ul>
              {fibSync.map((result, index) => (
                <li key={index}>
                  Result: {result} (Time: {timeSync[index].toFixed(2)} ms)
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <button onClick={calculateAsync}>
            Calculate Fibonacci Async with Web Worker
          </button>
          {asyncLoadings.map((_, index) => (
            <p key={index} style={{ color: "purple" }}>
              Calculating asynchronously...
            </p>
          ))}
          {fibAsync.length > 0 && (
            <ul>
              {fibAsync.map((result, index) => (
                <li key={index}>
                  Result: {result} (Time: {timeAsync[index].toFixed(2)} ms)
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
