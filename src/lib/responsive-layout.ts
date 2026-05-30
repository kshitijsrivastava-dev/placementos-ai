/**
 * Shared responsive layout class fragments for consistent breakpoints app-wide.
 */
export const responsiveLayout = {
  pageX: "px-4 sm:px-6 lg:px-10",
  pageY: "py-6 sm:py-8",
  sectionY: "space-y-5 sm:space-y-6",
  landingX: "px-4 sm:px-6",
  gridGap: "gap-4 sm:gap-5 lg:gap-6",
  touchTarget: "touch-manipulation",
  minTouchHeight: "min-h-11 sm:min-h-0",
  overflowSafe: "min-w-0 overflow-x-clip",
  container: "w-full min-w-0 mx-auto",
} as const;

/** 12-column dashboard grid with standard responsive gaps. */
export const dashboardGridClass = `grid grid-cols-12 ${responsiveLayout.gridGap} min-w-0`;

export const dashboardCol = {
  full: "col-span-12",
  half: "col-span-12 md:col-span-6",
  wide: "col-span-12 md:col-span-6 lg:col-span-7",
  narrow: "col-span-12 md:col-span-6 lg:col-span-5",
  third: "col-span-12 sm:col-span-6 lg:col-span-4",
  twoThirds: "col-span-12 lg:col-span-8",
} as const;
