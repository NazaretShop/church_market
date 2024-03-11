import React, { memo } from "react";

const DecrementIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.625 12h6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="#98A2B3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(DecrementIcon);
