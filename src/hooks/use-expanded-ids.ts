import { useCallback, useState } from "react";

export function useExpandedIds() {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set());

  const isExpanded = useCallback((id: string) => expandedIds.has(id), [expandedIds]);

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return { isExpanded, toggleExpanded };
}
