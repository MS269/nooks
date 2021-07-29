import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  if (typeof onClick !== "function") return;
  const element = useRef();
  useEffect(() => {
    const { current } = element;
    if (current) current.addEventListener("click", onClick);
    return () => {
      if (current) current.removeEventListener("click", onClick);
    };
  });
  return element;
};
