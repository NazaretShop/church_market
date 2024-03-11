import * as React from "react";

function IconArrowExpand(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M8 20H4m0 0v-4m0 4l4.5-4.5M16 4h4m0 0v4m0-4l-4.5 4.5M4 8V4m0 0h4M4 4l4.5 4.5M20 16v4m0 0h-4m4 0l-4.5-4.5"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconArrowExpand = React.memo(IconArrowExpand);
export default MemoIconArrowExpand;
