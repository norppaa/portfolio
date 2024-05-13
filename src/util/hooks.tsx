import { useEffect, useState } from "react";

const getWindowWidth = () => window.innerWidth;

export default function useWindowWidth() {
  const [isMobile, setIsMobile] = useState(getWindowWidth());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getWindowWidth());
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
