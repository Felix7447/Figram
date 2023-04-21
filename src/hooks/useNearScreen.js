import { useState, useRef, useEffect } from "react";

export const useNearScreen = () => {
  const [show, setShow] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    const observer = () => {
      Promise.resolve(
        typeof window.IntersectionObserver
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            element.current.addEventListener("DOMContentloaded", setShow(true));
            intersectionObserver.disconnect();
          }
        });
        intersectionObserver.observe(element.current);
      });
    };
    observer();
  }, []);

  return {
    show,
    element,
  };
};
