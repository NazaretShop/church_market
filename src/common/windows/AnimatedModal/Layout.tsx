import { FC, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";

import { Container, Content, Overlay } from "./styles";
import { IAnimatedModalProps } from "./types";

export const Layout: FC<IAnimatedModalProps> = ({
  onClose,
  children,
  opened,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ANIMATION_TIME = 1000;
  const [animationIn, setAnimationIn] = useState(false);

  useEffect(() => {
    setAnimationIn(opened);
  }, [opened]);

  return (
    <Container>
      <Transition
        nodeRef={overlayRef}
        in={animationIn}
        timeout={ANIMATION_TIME}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <Overlay ref={overlayRef} onClick={onClose} transitionState={state} />
        )}
      </Transition>
      <Transition
        nodeRef={contentRef}
        in={animationIn}
        timeout={ANIMATION_TIME}
        unmountOnExit
        mountOnEnter
      >
        {(state) => (
          <Content ref={contentRef} transitionState={state}>
            {children}
          </Content>
        )}
      </Transition>
    </Container>
  );
};
