import { useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") callback(isFull);
  };
  const triggerFull = () => {
    const { current } = element;
    if (current) {
      if (current.requestFullscreen) {
        current.requestFullscreen();
      } else if (current.mozRequestFullScreen) {
        current.mozRequestFullScreen();
      } else if (current.webkitRequestFullscreen) {
        current.webkitRequestFullscreen();
      } else if (current.msRequestFullscreen) {
        current.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
