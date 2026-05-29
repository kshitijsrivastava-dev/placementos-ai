import type { DSAFilters } from "@/types/dsa";

export const DSA_BOOKMARKS_STORAGE_KEY = "placementos-dsa-bookmarks";

export const DEFAULT_DSA_FILTERS: DSAFilters = {
  topicId: "all",
  difficulties: [],
  statuses: [],
  search: "",
  bookmarkedOnly: false,
  companies: [],
  importanceTiers: [],
  sortBy: "most-asked",
};
