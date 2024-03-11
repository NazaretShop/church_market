import * as React from "react";

function IconPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M7 20V4m10 16V4"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconPause = React.memo(IconPause);
export default MemoIconPause;
