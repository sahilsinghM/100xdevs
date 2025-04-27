// need to create an hook which will return "Online" if the user is online and "Offline" if the user is offline
import { useEffect, useState } from "react";

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);
  return position;
};

// import { useEffect, useState } from "react";
function MouseApp() {
  const yourposition = useMousePointer();
  return (
    <>{"Your position is x: " + yourposition.x + " and y: " + yourposition.y}</>
  );
}

export default MouseApp;
