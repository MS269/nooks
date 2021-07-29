export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener("click", onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener("click", onClick);
      }
    };
  });
  return ref;
};
