```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Correct: Return a cleanup function to cancel the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```