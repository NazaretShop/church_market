import { themeColors } from "@/theme/colors";
import * as React from "react";

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M20.664 18.771s-1.159 1.138-1.443 1.472c-.462.493-1.007.726-1.722.726-.069 0-.142 0-.21-.004-1.36-.087-2.625-.617-3.573-1.07a20.337 20.337 0 01-6.76-5.283c-1.56-1.878-2.605-3.615-3.297-5.48-.426-1.138-.581-2.024-.513-2.86.046-.536.252-.979.632-1.358L5.34 3.355c.225-.21.463-.324.696-.324.289 0 .522.173.669.32l.014.013c.279.26.545.53.824.818.142.147.288.293.435.444l1.25 1.248c.486.484.486.932 0 1.416-.133.133-.26.265-.394.393-.384.393-.082.092-.48.448-.01.01-.019.014-.023.023-.394.393-.32.777-.239 1.038l.014.04c.325.787.783 1.527 1.48 2.41l.004.004c1.264 1.554 2.597 2.765 4.067 3.693.188.119.38.215.563.306.165.082.32.16.454.242.018.01.036.023.055.032a.994.994 0 00.453.114c.38 0 .618-.237.696-.315l.898-.896c.155-.155.403-.342.691-.342.284 0 .518.178.66.333a.39.39 0 00.009.01l2.523 2.517c.472.467.005 1.431.005 1.431z"
        stroke={props?.stroke || themeColors.button}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoPhoneIcon = React.memo(PhoneIcon);
export default MemoPhoneIcon;