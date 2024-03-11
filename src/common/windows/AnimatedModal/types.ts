import { PropsWithChildren } from "react";
import { TransitionStatus } from "react-transition-group";

export interface IAnimatedModalProps extends PropsWithChildren {
  opened: boolean;
  onClose: () => void;
}

export interface ITransitionsProps {
  transitionState: TransitionStatus;
}
