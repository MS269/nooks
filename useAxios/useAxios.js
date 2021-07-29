import defaultAxios from "axios";
import { useState, useEffect } from "react";

export const useAxios = (options, axiosInstance = defaultAxios) => {
  if (!options.url) return;
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  const [trigger, setTrigger] = useState(0);
  useEffect(() => {
    axiosInstance(options)
      .then((data) => setState({ ...state, loading: false, data }))
      .catch((error) => setState({ ...state, loading: false, error }));
  }, [trigger]);
  const refetch = () => {
    setState({ ...state, loading: true });
    setTrigger(Date.now());
  };
  return { ...state, refetch };
};

export default useAxios;
