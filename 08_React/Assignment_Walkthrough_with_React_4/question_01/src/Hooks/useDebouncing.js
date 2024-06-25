export function useDebouncing(cb, delay = 600) {
  let timerid;
  return (...argments) => {
    clearInterval(timerid);
    timerid = setTimeout(() => {
      cb(...argments);
    }, delay);
  };
}
