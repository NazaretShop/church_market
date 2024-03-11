import * as React from "react";

function IconReload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M19.933 13.041a8 8 0 11-9.925-8.788C13.907 3.251 17.943 5.26 19.433 9"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4v5h-5"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconReload = React.memo(IconReload);
export default MemoIconReload;
