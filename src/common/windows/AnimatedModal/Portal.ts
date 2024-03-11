import { FC, PropsWithChildren, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal: FC<PropsWithChildren> = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    // Append the container to the body
    document.body.appendChild(container);

    // Cleanup function
    return () => {
      document.body.removeChild(container);
    };
  }, []); // Include container in the dependency array to avoid potential issues

  // Render the portal
  return ReactDOM.createPortal(children, container);
};

export default Portal;
