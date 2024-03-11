import * as React from "react";

function IconCompress(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M5 9h4V5M3 3l6 6M5 15h4v4M3 21l6-6M19 9h-4V5M15 9l6-6M19 15h-4v4M15 15l6 6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconCompress = React.memo(IconCompress);
export default MemoIconCompress;
