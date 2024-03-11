import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";

const MobileOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={767} />
);
const MobileOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={768} />
);
const LittleMobileOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={540} />
);
const LittleMobileOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={541} />
);
const DesktopOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1440} />
);
const DesktopOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1441} />
);
const LittleDesktopOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1280} />
);
const LittleDesktopOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1281} />
);
const TabletOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={1024} />
);
const TabletOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={1025} />
);

export {
  DesktopOff,
  DesktopOn,
  LittleDesktopOff,
  LittleDesktopOn,
  LittleMobileOff,
  LittleMobileOn,
  MobileOff,
  MobileOn,
  TabletOff,
  TabletOn,
};
