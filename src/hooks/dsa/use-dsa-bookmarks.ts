import { DSA_BOOKMARKS_STORAGE_KEY } from "@/lib/dsa/constants";
import { useLocalStorageStringSet } from "@/hooks/use-local-storage-set";

export function useDsaBookmarks() {
  const { values, toggle, count } = useLocalStorageStringSet(DSA_BOOKMARKS_STORAGE_KEY);

  return {
    bookmarkedIds: values,
    bookmarkCount: count,
    toggleBookmark: toggle,
  };
}
