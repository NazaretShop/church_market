import * as React from "react";

function IconVolumeMute(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M16.883 8.5V4l-4.651 4.651H5.5v6.697h4.046M16.883 13v7L13 16.117M6 18.5l3.546-3.152M19.5 6.5l-9.954 8.848"
        stroke="#1D2939"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoIconVolumeMute = React.memo(IconVolumeMute);
export default MemoIconVolumeMute;
