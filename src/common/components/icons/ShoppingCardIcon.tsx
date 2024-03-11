import * as React from "react";

function ShoppingCardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M6 21a2 2 0 100-4 2 2 0 000 4zM17 21a2 2 0 100-4 2 2 0 000 4zM17 17H6V3H4"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 5l14 1-1 7H6"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoShoppingCardIcon = React.memo(ShoppingCardIcon);
export default MemoShoppingCardIcon;
