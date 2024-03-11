import React, { memo } from "react";

const IncrementIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" {...props}>
    <g stroke="#98A2B3" strokeLinecap="round">
      <path
        d="M8.625 12h6.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeLinejoin="round"
      />
      <path d="M12 8.308v7.384M15.692 12H8.308" />
    </g>
  </svg>
);

export default memo(IncrementIcon);
