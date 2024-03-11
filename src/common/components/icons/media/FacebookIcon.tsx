import * as React from "react";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" fill="none" {...props}>
      <g clip-path="url(#clip0_504_2990)">
        <mask
          id="mask0_504_2990"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="40"
          height="40"
        >
          <path d="M40 0H0V40H40V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_504_2990)">
          <path
            d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.9825 7.31367 38.2567 16.875 39.757V25.7813H11.7969V20H16.875V15.5937C16.875 10.5812 19.861 7.8125 24.4293 7.8125C26.6168 7.8125 28.9063 8.20313 28.9063 8.20313V13.125H26.3843C23.9 13.125 23.125 14.6668 23.125 16.25V20H28.6718L27.7852 25.7813H23.125V39.757C32.6863 38.2567 40 29.9825 40 20Z"
            fill="#191919"
          />
        </g>
      </g>
    </svg>
  );
}

const MemoFacebookIcon = React.memo(FacebookIcon);
export default MemoFacebookIcon;
