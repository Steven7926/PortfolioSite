import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";


const rise = keyframes`
  from { opacity: 0; transform: translate3d(0, 18px, 0); }
  to   { opacity: 1; transform: none; }
`;

function Rise({ children, ...props }) {
  return (
    <Reveal keyframes={rise} duration={550} fraction={0.05} triggerOnce {...props}>
      {children}
    </Reveal>
  );
}

export default Rise;
