import * as React from "react";

function IconVolumeUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M19.682 8.08c1.584 2.514 1.808 5.86.301 8.822m-3.637-7.178c1.337 1.563 1.526 3.642.254 5.482M12 6L7.588 9.488H3v5.023l4.588-.001L12 18V6z"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconVolumeUp = React.memo(IconVolumeUp);
export default MemoIconVolumeUp;
