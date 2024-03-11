import { useMount } from "@/common/hooks";
import { FC } from "react";
import { Layout } from "./Layout";
import Portal from "./Portal";
import { IAnimatedModalProps } from "./types";

const AnimatedModal: FC<IAnimatedModalProps> = (props) => {
  const { onClose, opened, children } = props;
  const { mounted } = useMount(opened);

  if (!mounted) {
    return null;
  }

  return (
    <Portal>
      <Layout onClose={onClose} opened={opened}>
        {children}
      </Layout>
    </Portal>
  );
};

export default AnimatedModal;
