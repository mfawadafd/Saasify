import { useState, useCallback, useEffect } from "react";

const useScrollReveal = (threshold = 0.3) => {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;