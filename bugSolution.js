```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Use functional update
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```