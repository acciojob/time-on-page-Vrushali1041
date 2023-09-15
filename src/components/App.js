
import React from "react";
import './../styles/App.css';

const App = () => {
        const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
       {/* Do not remove the main div */}
       <p>You've been on this page for {seconds} seconds.</p>
    </div>
  );

   
}

export default App
