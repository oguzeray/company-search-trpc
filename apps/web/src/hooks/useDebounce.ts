import { useEffect, useCallback, DependencyList } from "react";

type NonNegativeInteger<T extends number> = `${T}` extends
  | `-${string}`
  | `${string}.${string}`
  ? never
  : T;

export default function useDebounce<T extends number, K extends Function>(
  effect: K,
  delay: NonNegativeInteger<T>,
  dependencies: DependencyList
) {
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(() => callback(), delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}
