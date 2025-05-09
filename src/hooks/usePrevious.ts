import { useCallback, useEffect, useRef, useState } from 'react';
/**
 * Custom hook that returns the previous value of a variable and a function to manually update it.
 *
 * @template T The type of the value to track
 * @param {T} value The current value to track
 * @returns {[T | undefined, () => void]} A tuple containing:
 *   - The previous value (undefined on first render)
 *   - A function to manually update the previous value to the current value
 *
 * @example
 * // Basic usage
 * const [prevCount, updatePrevCount] = usePrevious(count);
 *
 * // Compare current and previous values
 * useEffect(() => {
 *   if (prevCount !== undefined && prevCount !== count) {
 *     console.log(`Count changed from ${prevCount} to ${count}`);
 *   }
 * }, [prevCount, count]);
 *
 * // Manual update example
 * const handleReset = () => {
 *   setCount(0);
 *   updatePrevCount(); // Manually update previous value without waiting for next render
 * };
 */
export default function usePrevious<T>(value: T): [T | undefined, () => void] {
  const ref = useRef<T>(undefined);
  const [_, forceUpdate] = useState({});
  useEffect(() => {
    ref.current = value;
  }, [value]);
  const update = useCallback(() => {
    ref.current = value;
    forceUpdate({});
  }, [value]);
  return [ref.current, update];
}
