```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using count as a dependency
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]); // This will cause an infinite loop

  return <div>Count: {count}</div>;
}
```