// need to create an hook which will return "Online" if the user is online and "Offline" if the user is offline
import { useEffect, useState } from "react";

const useOnline = (t) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    setInterval(() => {
      if (!window.navigator.onLine) {
        setIsOnline(false);
      } else {
        setIsOnline(true);
      }
    }, t * 1000);
    return () => {
      clearInterval();
    };
  }, [t]);
  return isOnline;
};

// import { useEffect, useState } from "react";
function OnlineApp() {
  const isOnline = useOnline(5);
  if (isOnline) {
    return <h1>Online</h1>;
  }
  return <h1>Offline</h1>;
}

export default OnlineApp;
