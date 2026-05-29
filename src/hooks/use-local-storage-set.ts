import { useCallback, useState } from "react";
import {
  readLocalStorageStringSet,
  writeLocalStorageStringSet,
} from "@/lib/storage/local-storage-set";

export function useLocalStorageStringSet(storageKey: string) {
  const [values, setValues] = useState(() => readLocalStorageStringSet(storageKey));

  const toggle = useCallback(
    (id: string) => {
      setValues((prev) => {
        const next = new Set(prev);
        if (next.has(id)) next.delete(id);
        else next.add(id);
        writeLocalStorageStringSet(storageKey, next);
        return next;
      });
    },
    [storageKey],
  );

  return {
    values,
    toggle,
    count: values.size,
    has: (id: string) => values.has(id),
  };
}
