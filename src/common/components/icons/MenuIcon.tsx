import { themeColors } from "@/theme/colors";
import * as React from "react";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path
        d="M20 18H4m16-6H4m16-6H4"
        stroke={themeColors.button}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoMenuIcon = React.memo(MenuIcon);
export default MemoMenuIcon;
