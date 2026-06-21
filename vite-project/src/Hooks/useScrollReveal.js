import { useState, useCallback, useEffect } from "react";

const useScrollReveal = (visibilityPercent = 0.3) => {
  const [node, setNode] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // callback ref, not object ref
  const ref = useCallback((el) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return; // element not mounted yet, just skip

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { visibilityPercent }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, visibilityPercent]);

  return [ref, isVisible];
};

export default useScrollReveal;