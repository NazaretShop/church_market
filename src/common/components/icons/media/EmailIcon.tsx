import * as React from "react";

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={16} viewBox="0 0 20 16" fill="none" {...props}>
      <path
        d="M2.688 2.75L9.36 7.54c.385.277.895.277 1.28 0l6.672-4.79M3.25 15h13.5c1.243 0 2.25-1.045 2.25-2.333V3.333C19 2.045 17.993 1 16.75 1H3.25C2.007 1 1 2.045 1 3.333v9.334C1 13.955 2.007 15 3.25 15z"
        stroke="#191919"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoEmailIcon = React.memo(EmailIcon);
export default MemoEmailIcon;
